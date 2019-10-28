// import React from "react";

export const maxSize = size => val =>
  val.length > size && "You text is over size";
export const required = val => !val && "Please write something";
