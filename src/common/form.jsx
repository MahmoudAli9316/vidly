import { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/input";
import Select from "./select";
import RangeInput from "./rangeInput";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  setButtonStyle = disabled => {
    return disabled ? { cursor: "not-allowed" } : { cursor: "pointer" };
  };
  renderButton = label => {
    const disabled = this.validate() !== null;
    return (
      <button style={this.setButtonStyle(disabled)} disabled={disabled} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        onChange={this.handleChange}
        name={name}
        options={options}
        value={data[name]}
        label={label}
        error={errors[name]}
      />
    );
  };

  renderRange = (name, label, min, max, step) => {
    if (max < min) throw new Error("max can't be less than min.");
    return <RangeInput name={name} label={label} min={min} max={max} step={step} />;
  };
}

export default Form;
