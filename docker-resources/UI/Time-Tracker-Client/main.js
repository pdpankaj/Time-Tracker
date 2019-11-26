(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" user-container>\r\n  <h2 class=\"text-center\">Submit Your Time</h2>\r\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name:</label>\r\n      <input type=\"name\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" formControlName=\"firstName\"\r\n        id=\"firstName\">\r\n        <div class=\"error\" *ngIf=\"addForm.controls['firstName'].hasError('required') && addForm.controls['firstName'].touched\">First name is required</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name:</label>\r\n      <input type=\"name\" placeholder=\"Last Name\" name=\"lastName\" formControlName=\"lastName\" class=\"form-control\"\r\n        id=\"lastName\">\r\n        <div class=\"error\" *ngIf=\"addForm.controls['lastName'].hasError('required') && addForm.controls['lastName'].touched\">Last name is required</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"emailId\">Email ID:</label>\r\n      <input type=\"email\" placeholder=\"Email ID\" name=\"emailId\" formControlName=\"emailId\" class=\"form-control\"\r\n        id=\"emailId\">\r\n        <div class=\"error\" *ngIf=\"addForm.controls['emailId'].hasError('required') && addForm.controls['emailId'].touched\">Email ID is required</div>\r\n        <div class=\"error\" *ngIf=\"addForm.controls['emailId'].hasError('email') && addForm.controls['emailId'].touched\">Email ID is required</div>\r\n        \r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"inTime\">In Time:</label>\r\n      <input type=\"text\"  placeholder=\"21.11.2019 09:00\" name=\"inTime\" class=\"form-control\" formControlName=\"inTime\" id=\"inTime\">\r\n      <div class=\"error\" *ngIf=\"addForm.controls['inTime'].hasError('required') && addForm.controls['inTime'].touched\">In time is required</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"outTime\">Out Time:</label>\r\n      <input type=\"text\"  placeholder=\"21.11.2019 17:00\" name=\"outTime\" class=\"form-control\" formControlName=\"outTime\" id=\"outTime\">\r\n      <div class=\"error\" *ngIf=\"addForm.controls['outTime'].hasError('required') && addForm.controls['outTime'].touched\">Out time is required</div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary\" [disabled]=\"addForm.invalid\">Create</button>\r\n  </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/add-employee/add-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-employee/add-employee.component.ts ***!
  \********************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");





var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(formBuilder, router, httpClientService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.httpClientService = httpClientService;
        this.employee = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["Employee"](-1, "", "", "", "", "");
        this.adding = false;
        this.InOutTimeValidation = function (control) {
            try {
                var inTime = control.get('inTime').value;
                var outTime = control.get('outTime').value;
                if (inTime > outTime && outTime) {
                    console.log("Please set an Out Date and Time that is after the In Date and Time.");
                    alert("Please set an Out Time that is after the In Time.");
                    control.get('outTime').setValue('');
                    return {};
                }
                else {
                    return {};
                }
            }
            catch (err) {
            }
        };
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            inTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            outTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        var existingEmployee = this.httpClientService.getEmployee();
        if (existingEmployee) {
            //this.httpClientService.getEmployeeByEmailId().subscribe(
            //response => this.handleResponse(response),
            //);
            this.addForm.controls.firstName.setValue(existingEmployee.firstName);
            this.addForm.controls.lastName.setValue(existingEmployee.lastName);
            this.addForm.controls.emailId.setValue(existingEmployee.emailId);
            this.addForm.controls.inTime.setValue('');
            this.addForm.controls.outTime.setValue('');
        }
    };
    AddEmployeeComponent.prototype.handleResponse = function (response) {
        this.employee = response;
        this.addForm.controls.firstName.setValue(this.employee.firstName);
        this.addForm.controls.lastName.setValue(this.employee.lastName);
        this.addForm.controls.emailId.setValue(this.employee.emailId);
        this.addForm.controls.inTime.setValue('');
        this.addForm.controls.outTime.setValue('');
    };
    AddEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.addForm.invalid) {
            return;
        }
        console.log("Employee creation started.");
        this.httpClientService.createEmployee(this.addForm.value)
            .subscribe(function (data) {
            console.log("Employee created successfully.");
            _this.router.navigate(['employeesearch']);
        });
    };
    ;
    AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.css */ "./src/app/add-employee/add-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _existing_employee_existing_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./existing-employee/existing-employee.component */ "./src/app/existing-employee/existing-employee.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/auth-gaurd.service */ "./src/app/service/auth-gaurd.service.ts");










var routes = [
    { path: '', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AuthGaurdService"]] },
    { path: 'addemployee', component: _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AuthGaurdService"]] },
    { path: 'employeesearch', component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AuthGaurdService"]] },
    { path: 'submitTime', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AuthGaurdService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AuthGaurdService"]] },
    { path: 'existingEmployee', component: _existing_employee_existing_employee_component__WEBPACK_IMPORTED_MODULE_6__["ExistingEmployeeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_9__["AuthGaurdService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Time-Tracker-Client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/add-employee/add-employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_jwtauth_htpp_interceptor_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/jwtauth-htpp-interceptor-service.service */ "./src/app/service/jwtauth-htpp-interceptor-service.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipe/filter.pipe */ "./src/app/pipe/filter.pipe.ts");
/* harmony import */ var _existing_employee_existing_employee_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./existing-employee/existing-employee.component */ "./src/app/existing-employee/existing-employee.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"],
                _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__["AddEmployeeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"],
                _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"],
                _existing_employee_existing_employee_component__WEBPACK_IMPORTED_MODULE_18__["ExistingEmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _service_jwtauth_htpp_interceptor_service_service__WEBPACK_IMPORTED_MODULE_15__["JWTAuthHtppInterceptorService"], multi: true
                },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"col-md-12\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>First Name</th>\r\n          <th>Last Name</th>\r\n          <th>Email Id</th>\r\n          <th>In Time</th>\r\n          <th>Out Time</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let employee of employees | paginate: { itemsPerPage: count, currentPage: p }\">\r\n          <td>{{employee.firstName}}</td>\r\n          <td>{{employee.lastName}}</td>\r\n          <td>{{employee.emailId}}</td>\r\n          <td>{{employee.inTime}}</td>\r\n          <td>{{employee.outTime}}</td>\r\n          <td><button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee)\"> Delete Employee</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <!--Including the pagination control.-->\r\n  <div class=\"text-right\">\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(httpClientService) {
        this.httpClientService = httpClientService;
        // Pagination parameters.
        this.p = 1;
        this.count = 5;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClientService.getEmployees().subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
    };
    EmployeeComponent.prototype.handleSuccessfulResponse = function (response) {
        this.employees = response;
    };
    EmployeeComponent.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.httpClientService.deleteEmployee(employee)
            .subscribe(function (data) {
            _this.employees = _this.employees.filter(function (u) { return u !== employee; });
        });
    };
    ;
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/existing-employee/existing-employee.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/existing-employee/existing-employee.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aXN0aW5nLWVtcGxveWVlL2V4aXN0aW5nLWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/existing-employee/existing-employee.component.html":
/*!********************************************************************!*\
  !*** ./src/app/existing-employee/existing-employee.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"col-md-6\" user-container>\n  <h2 class=\"text-center\">Submit Your Time</h2>\n  <form [formGroup]=\"existingEmployeeForm\" (ngSubmit)=\"onSubmit()\">-->\n<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Submit Your Time</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input type=\"name\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" formControlName=\"firstName\"\n        id=\"firstName\">\n      <div class=\"error\"\n        *ngIf=\"addForm.controls['firstName'].hasError('required') && addForm.controls['firstName'].touched\">First name\n        is required</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input type=\"name\" placeholder=\"Last Name\" name=\"lastName\" formControlName=\"lastName\" class=\"form-control\"\n        id=\"lastName\">\n      <div class=\"error\"\n        *ngIf=\"addForm.controls['lastName'].hasError('required') && addForm.controls['lastName'].touched\">Last name is\n        required</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"emailId\">Email ID:</label>\n      <input type=\"email\" placeholder=\"Email ID\" name=\"emailId\" formControlName=\"emailId\" class=\"form-control\"\n        id=\"emailId\">\n      <div class=\"error\"\n        *ngIf=\"addForm.controls['emailId'].hasError('required') && addForm.controls['emailId'].touched\">Email ID is\n        required</div>\n      <div class=\"error\" *ngIf=\"addForm.controls['emailId'].hasError('email') && addForm.controls['emailId'].touched\">\n        Email ID is required</div>\n\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inTime\">In Time:</label>\n      <input type=\"text\" placeholder=\"21.11.2019 09:00\" name=\"inTime\" class=\"form-control\" formControlName=\"inTime\"\n        id=\"inTime\">\n      <div class=\"error\" *ngIf=\"addForm.controls['inTime'].hasError('required') && addForm.controls['inTime'].touched\">\n        In time is required</div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"outTime\">Out Time:</label>\n      <input type=\"text\" placeholder=\"21.11.2019 17:00\" name=\"outTime\" class=\"form-control\" formControlName=\"outTime\"\n        id=\"outTime\">\n      <div class=\"error\"\n        *ngIf=\"addForm.controls['outTime'].hasError('required') && addForm.controls['outTime'].touched\">Out time is\n        required</div>\n    </div>\n\n    <button class=\"btn btn-primary\" [disabled]=\"addForm.invalid\">Create</button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/existing-employee/existing-employee.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/existing-employee/existing-employee.component.ts ***!
  \******************************************************************/
/*! exports provided: ExistingEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingEmployeeComponent", function() { return ExistingEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");





var ExistingEmployeeComponent = /** @class */ (function () {
    function ExistingEmployeeComponent(formBuilder, router, httpClientService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.httpClientService = httpClientService;
        this.employee = null;
        this.InOutTimeValidation = function (control) {
            try {
                var inTime = control.get('inTime').value;
                var outTime = control.get('outTime').value;
                if (inTime > outTime && outTime) {
                    console.log("Please set an Out Date and Time that is after the In Date and Time.");
                    alert("Please set an Out Time that is after the In Time.");
                    control.get('outTime').setValue('');
                    return {};
                }
                else {
                    return {};
                }
            }
            catch (err) {
            }
        };
    }
    ExistingEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var emailId = this.httpClientService.getEmployeeEmailId();
        if (!emailId) {
            alert("Invalid action.");
            this.router.navigate(['employeesearch']);
            return;
        }
        this.existingEmployeeForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            inTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            outTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validators: this.InOutTimeValidation });
        this.httpClientService.getEmployeeByEmailId().subscribe(function (response) { return _this.handleResponse(response); });
    };
    ExistingEmployeeComponent.prototype.handleResponse = function (response) {
        this.employee = response;
        this.existingEmployeeForm.controls.firstName.setValue(this.employee.firstName);
        this.existingEmployeeForm.controls.lastName.setValue(this.employee.lastName);
        this.existingEmployeeForm.controls.emailId.setValue(this.employee.emailId);
        this.existingEmployeeForm.controls.inTime.setValue('');
        this.existingEmployeeForm.controls.outTime.setValue('');
    };
    ExistingEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existingEmployeeForm.invalid) {
            return;
        }
        console.log("Employee creation started.");
        this.httpClientService.createEmployee(this.existingEmployeeForm.value)
            .subscribe(function (data) {
            console.log("Employee created successfully.");
            _this.router.navigate(['employeesearch']);
        });
    };
    ;
    ExistingEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-existing-employee',
            template: __webpack_require__(/*! ./existing-employee.component.html */ "./src/app/existing-employee/existing-employee.component.html"),
            styles: [__webpack_require__(/*! ./existing-employee.component.css */ "./src/app/existing-employee/existing-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"]])
    ], ExistingEmployeeComponent);
    return ExistingEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width:100%;\r\n    height: 40px;\r\n    background-color: #222222;\r\n}\r\n\t\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuXHQiXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n      <span class=\"text-muted\"></span>\r\n  </div>\r\n\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class =\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  \r\n  <ul class=\"navbar-nav\">\r\n    <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/\" class=\"nav-link\">Dashboard</a></li>\r\n    <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/employeesearch\" class=\"nav-link\">Time Tracker</a></li>\r\n    <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/addemployee\" class=\"nav-link\">Submit Time</a></li>\r\n    <li><a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/login\" class=\"nav-link\"> Login</a></li>\r\n    <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">Log Out</a></li>\r\n  \r\n  \r\n  </ul>\r\n  \r\n  </nav>\r\n  \r\n  </header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    background-color: blanchedalmond;\r\n    margin: 2em auto auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgbWFyZ2luOiAyZW0gYXV0byBhdXRvO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-6 login-container\">\r\n    <h2 style=\"margin: auto\">Login </h2>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\">\r\n        <div class=\"error\" *ngIf=\"loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched\">Username is required</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"pwd\">Password:</label>\r\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" autocomplete=\"off\">\r\n        <div class=\"error\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">Password is required</div>\r\n      </div>\r\n      <button class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Login</button>\r\n      <div *ngIf=\"invalidLogin\" class=\"error\">\r\n        <div>Invalid credentials.</div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, loginservice) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        //alert('1 '+this.loginForm.invalid)
        if (this.loginForm.invalid) {
            return;
        }
        (this.loginservice.authenticate(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(function (data) {
            _this.router.navigate(['']);
        }, function (error) {
            _this.invalidLogin = true;
        }));
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  logout works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authentocationService, router) {
        this.authentocationService = authentocationService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authentocationService.logOut();
        this.router.navigate(['login']);
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, value, prop) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (singleItem) {
            return singleItem[prop].toLowerCase().startsWith(value.toLowerCase());
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\r\n    padding-top:0px;\r\n    padding-bottom:0px;\r\n    padding-right:20px;   \r\n  }\r\n\r\n  .add{\r\n    margin-top:10px;\r\n    margin-bottom:10px;\r\n    background-color:green;\r\n    color:white;\r\n    min-width:90px;\r\n    min-height:10px;\r\n}\r\n\r\n  .search{\r\n    background-color:blue;\r\n    color:white;\r\n    min-width:90px;\r\n    min-height:10px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0VBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICAgIHBhZGRpbmctdG9wOjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDsgICBcclxuICB9XHJcblxyXG4gIC5hZGR7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtaW4td2lkdGg6OTBweDtcclxuICAgIG1pbi1oZWlnaHQ6MTBweDtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWluLXdpZHRoOjkwcHg7XHJcbiAgICBtaW4taGVpZ2h0OjEwcHg7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <label for=\"firstName\">First Name:</label>\n                  <input [(ngModel)]=\"searchFirstName\" placeholder=\"First Name\">\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <label for=\"firstName\">Last Name:</label>\n                  <input [(ngModel)]=\"searchlastName\" placeholder=\"Last Name\">\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <label for=\"firstName\">Email ID:</label>\n                  <input [(ngModel)]=\"searchEmail\" placeholder=\"Email ID\">\n            </div>\n\n</div>\n<div class=\"row\">\n</div>\n\n<div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <button class=\"btn search\" (click)=\"searchClick()\">Search</button>\n\n            <button class=\"btn add\" (click)=\"setEmployeeId(-1)\" routerLink=\"/addemployee\">Add New</button>\n      </div>\n</div>\n<div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <table class=\"table table-striped\">\n                  <thead>\n                        <tr>\n                              <td><b>First Name</b></td>\n                              <td><b>Last Name</b></td>\n                              <td><b>Email ID</b></td>\n                              <td><b>In Time</b></td>\n                              <td><b>Out Time</b></td>\n                              <td></td>\n                        </tr>\n                  </thead>\n                  <tbody>\n                        <tr\n                              *ngFor=\"let employee of employees | paginate: { itemsPerPage: searchCount, currentPage: searchPage }\">\n                              <td>{{employee.firstName}}</td>\n                              <td>{{employee.lastName}}</td>\n                              <td>{{employee.emailId}}</td>\n                              <td>{{employee.inTime}}</td>\n                              <td>{{employee.outTime}}</td>\n                              <td>\n                                    <button class=\"btn add\" (click)=\"existingEmployee(employee)\"\n                                          routerLink=\"/addemployee\">Add</button>\n\n                                    <button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee)\">Delete</button>\n                              </td>\n                        </tr>\n                  </tbody>\n            </table>\n            <!--Including the pagination control.-->\n            <div class=\"text-right\">\n                  <pagination-controls (pageChange)=\"searchPage = $event\"></pagination-controls>\n            </div>\n\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/service/httpclient.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpClientService, router, activeRoute) {
        this.httpClientService = httpClientService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.employees = [];
        this.allEmployees = [];
        this.employee = null;
        this.relevantEmployee = null;
        this.searchFirstName = "";
        this.searchlastName = "";
        this.searchEmail = "";
        // Pagination parameters.
        this.searchPage = 1;
        this.searchCount = 5;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClientService.getEmployees().subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
    };
    SearchComponent.prototype.handleSuccessfulResponse = function (response) {
        this.employees = response;
        this.allEmployees = response;
    };
    /*showAll() removes search constraints and makes the
    html table show every entry in the database */
    SearchComponent.prototype.showAll = function () {
        this.employees = this.allEmployees;
    };
    /*searchClick() constrains the list of displayed employees by
    first name, last name, email*/
    SearchComponent.prototype.searchClick = function () {
        this.employees = [];
        //alert("searchClick()");
        //for each entry in 'allemployees'...
        for (var i = 0; i < this.allEmployees.length; i++) {
            //check name
            if (this.searchFirstName.length > 0) {
                if (!this.allEmployees[i].firstName.toUpperCase().includes(this.searchFirstName.toUpperCase()))
                    continue;
            }
            //check email
            if (this.searchEmail.length > 0) {
                if (!this.allEmployees[i].emailId.toUpperCase().includes(this.searchEmail.toUpperCase()))
                    continue;
            }
            //check phone
            if (this.searchlastName.length > 0) {
                if (!this.allEmployees[i].lastName.toUpperCase().includes(this.searchlastName.toUpperCase()))
                    continue;
            }
            this.employees.push(this.allEmployees[i]);
        } //end of for loop
    };
    SearchComponent.prototype.setEmployeeId = function (id) {
        this.httpClientService.setEmployeeId(id);
    };
    SearchComponent.prototype.setEmployeeEmailId = function (emailId) {
        this.httpClientService.setEmployeeEmailId(emailId);
    };
    SearchComponent.prototype.existingEmployee = function (employee) {
        this.httpClientService.setEmployee(employee);
    };
    ;
    SearchComponent.prototype.deleteEmployee = function (employee) {
        var _this = this;
        this.httpClientService.deleteEmployee(employee)
            .subscribe(function (data) {
            _this.employees = _this.employees.filter(function (u) { return u !== employee; });
        });
    };
    ;
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/service/auth-gaurd.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-gaurd.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    AuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: User, JwtResponse, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function() { return JwtResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var User = /** @class */ (function () {
    function User(status) {
        this.status = status;
    }
    return User;
}());

var JwtResponse = /** @class */ (function () {
    function JwtResponse(jwttoken) {
        this.jwttoken = jwttoken;
    }
    return JwtResponse;
}());

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        return this.httpClient.post('http://' + window.location.hostname + ':8080/Time-Tracker-0.0.1-SNAPSHOT/Time-Tracker/authenticate', { username: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userData) {
            sessionStorage.setItem('username', username);
            var tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        //console.log(!(user === null))
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/httpclient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/httpclient.service.ts ***!
  \***********************************************/
/*! exports provided: Employee, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var Employee = /** @class */ (function () {
    function Employee(empId, firstName, lastName, emailId, inTime, outTime) {
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.inTime = inTime;
        this.outTime = outTime;
    }
    return Employee;
}());

var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient, locationStrategy) {
        this.httpClient = httpClient;
        this.locationStrategy = locationStrategy;
        this.setGroupFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getGroupFilter = this.setGroupFilter$.asObservable();
        this.remployeeId = -1;
        this.remailId = "";
        this.remployee = null;
        //console.log('####### '+ this.locationStrategy.getBaseHref());
        //console.log('####### '+ window.location);
    }
    HttpClientService.prototype.getEmployees = function () {
        console.log('******   getEmployees');
        return this.httpClient.get('http://' + window.location.hostname + ':8080/Time-Tracker-0.0.1-SNAPSHOT/Time-Tracker/employees');
    };
    HttpClientService.prototype.getEmployeeByEmailId = function () {
        console.log('******   getEmployeeByEmailId');
        return this.httpClient.get("http://" + window.location.hostname + ":8080/Time-Tracker-0.0.1-SNAPSHOT/Time-Tracker/employees" + "/email/" + this.getEmployeeEmailId());
    };
    HttpClientService.prototype.deleteEmployee = function (employee) {
        console.log('deleteEmployee');
        return this.httpClient.delete("http://" + window.location.hostname + ":8080/Time-Tracker-0.0.1-SNAPSHOT/Time-Tracker/employees" + "/" + employee.empId);
    };
    HttpClientService.prototype.createEmployee = function (employee) {
        console.log('****  createEmployee ' + employee);
        return this.httpClient.post("http://" + window.location.hostname + ":8080/Time-Tracker-0.0.1-SNAPSHOT/Time-Tracker/employees", employee);
    };
    HttpClientService.prototype.getEmployeeId = function () {
        return this.remployeeId;
    };
    HttpClientService.prototype.setEmployeeId = function (id) {
        this.remployeeId = id;
    };
    HttpClientService.prototype.getEmployee = function () {
        return this.remployee;
    };
    HttpClientService.prototype.setEmployee = function (remployee) {
        this.remployee = remployee;
    };
    HttpClientService.prototype.getEmployeeEmailId = function () {
        return this.remailId;
    };
    HttpClientService.prototype.setEmployeeEmailId = function (emailId) {
        this.remailId = emailId;
    };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/app/service/jwtauth-htpp-interceptor-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/jwtauth-htpp-interceptor-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: JWTAuthHtppInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTAuthHtppInterceptorService", function() { return JWTAuthHtppInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JWTAuthHtppInterceptorService = /** @class */ (function () {
    function JWTAuthHtppInterceptorService() {
    }
    JWTAuthHtppInterceptorService.prototype.intercept = function (req, next) {
        console.log('sessionStorage.getItem(username) ' + sessionStorage.getItem('username'));
        console.log('sessionStorage.getItem(token) ' + sessionStorage.getItem('token'));
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    };
    JWTAuthHtppInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JWTAuthHtppInterceptorService);
    return JWTAuthHtppInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PP\_Java_Practice\Angular_Code\Time-Tracker-Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map