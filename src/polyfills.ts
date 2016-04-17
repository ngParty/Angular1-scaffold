import 'reflect-metadata';

function __extends(d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}
function __awaiter(thisArg, _arguments, Promise, generator) {
  return new Promise(function (resolve, reject) {
    generator = generator.call(thisArg, _arguments);
    function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
    function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
    function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
    function step(verb, value) {
      var result = generator[verb](value);
      result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
    }
    step("next", void 0);
  });
}

declare const global: any;

const _global = window || global;

_global.__extends = (this && this.__extends) || __extends;
_global.__decorate = (this && this.__decorate) || __decorate;
_global.__metadata = (this && this.__metadata) || __metadata;
_global.__param = (this && this.__metadata) || __param;
_global.__awaiter = (this && this.__awaiter) || __awaiter;

/*var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
  };

(window as any).__extends = __extends;
(window as any).__decorate = __decorate;
(window as any).__metadata = __metadata;
(window as any).__param = __param;*/
