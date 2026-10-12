/*
 * The Qubit Factory — unofficial Japanese adaptation by kosukemtr.
 * Modified from https://github.com/awslabs/the-qubit-factory:
 * the original scripts.min.js was reformatted and split into source files;
 * this adaptation also includes Japanese localization and related adjustments.
 * Original work: Glen Evenbly (AWS Center for Quantum Computing).
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under Apache-2.0; see LICENSE and NOTICE in the repository root.
 */
class SelectPlaque {
  constructor(e, t, i, a, r, s) {
    (this._name = e),
      (this._link = t),
      (this._i0 = i),
      (this._j0 = a),
      (this._w0 = r),
      (this._h0 = s),
      (this._isHover = !1);
  }
  get name() {
    return this._name;
  }
  get link() {
    return this._link;
  }
  get i0() {
    return this._i0;
  }
  get j0() {
    return this._j0;
  }
  get w0() {
    return this._w0;
  }
  get h0() {
    return this._h0;
  }
  get isHover() {
    return this._isHover;
  }
  set name(e) {
    this._name = e;
  }
  set link(e) {
    this._link = e;
  }
  set i0(e) {
    this._i0 = e;
  }
  set j0(e) {
    this._j0 = e;
  }
  set w0(e) {
    this._w0 = e;
  }
  set h0(e) {
    this._h0 = e;
  }
  set isHover(e) {
    this._isHover = e;
  }
}
