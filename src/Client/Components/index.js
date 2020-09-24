import React, { Component } from "react";

export  const toastrSuccessOptions = {
  timeOut: 30000, 
  // icon: (<i className="fa fa-smile"></i>),
  className: 'front-toastr front-toastr-success',
  position: 'top-center',
  autoClose: false,
  transitionIn: 'bounceIn',
    transitionOut: 'bounceOut',
  showCloseButton: true,
  closeOnToastrClick: true
}

export const toastrErrorOptions = {
  timeOut: 3000, // by setting to 0 it will prevent the auto close
  icon: (<i className="fa fa-frown"></i>),
  className: 'front-toastr front-toastr-error',
  position: 'top-center',
  autoClose: false,
  transitionIn: 'bounceIn',
  transitionOut: 'bounceOut',
  showCloseButton: true,
  closeOnToastrClick: true
}

export const toastrCustomError = {
  timeOut: 3000, // by setting to 0 it will prevent the auto close
  icon: (<i className="far fa-frown"></i>),
  className: 'front-toastr front-toastr-error',
  position: 'top-center',
  autoClose: false,
  transitionIn: 'bounceIn',
  transitionOut: 'bounceOut',
  showCloseButton: true,
  closeOnToastrClick: true
}