import React, { useState } from "react";
import {withFormik, Form, Field} from 'formik';

function searchForm({setFilter}) {
  return (
    <section className="search-form">
      <p>Filter</p>
      <Form>
        <Field type="text" name="name" placeholder="Name"/>
        <Field type="text" name="type" placeholder="Type"/>
        <Field type="text" name="status" placeholder="Status"/>
        <Field type="text" name="species" placeholder="Species"/>
        <Field type="text" name="gender" placeholder="Gender"/>
        <label>Case-sensitive:</label>
        <Field type="checkbox" name="caseSensitive"/>
        <button>Submit</button>
      </Form>
    </section>
  );
}

const SearchForm = withFormik({
  mapPropsToValues({name, type, status, species, gender, caseSensitive}) {
    return {
      name: name || "",
      type: type || "",
      status: status || "",
      species: species || "",
      gender: gender || "",
      caseSensitive: caseSensitive || false,
    }
  },

  handleSubmit(values, {props, setSubmitting}) {
    props.setFilter(values);
    setSubmitting(false);
  }
})(searchForm);

export default SearchForm;