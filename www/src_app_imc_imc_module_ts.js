"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_imc_imc_module_ts"],{

/***/ 1036:
/*!*******************************************!*\
  !*** ./src/app/imc/imc-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImcPageRoutingModule": () => (/* binding */ ImcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _imc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imc.page */ 599);




const routes = [
    {
        path: '',
        component: _imc_page__WEBPACK_IMPORTED_MODULE_0__.ImcPage
    }
];
let ImcPageRoutingModule = class ImcPageRoutingModule {
};
ImcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImcPageRoutingModule);



/***/ }),

/***/ 8508:
/*!***********************************!*\
  !*** ./src/app/imc/imc.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImcPageModule": () => (/* binding */ ImcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _imc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imc-routing.module */ 1036);
/* harmony import */ var _imc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imc.page */ 599);







let ImcPageModule = class ImcPageModule {
};
ImcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _imc_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImcPageRoutingModule
        ],
        declarations: [_imc_page__WEBPACK_IMPORTED_MODULE_1__.ImcPage]
    })
], ImcPageModule);



/***/ }),

/***/ 599:
/*!*********************************!*\
  !*** ./src/app/imc/imc.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImcPage": () => (/* binding */ ImcPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_SWIFT_5_Documents_coding_DIC2_dev_mobile_tpmobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_imc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./imc.page.html */ 7429);
/* harmony import */ var _imc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imc.page.scss */ 2810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let ImcPage = class ImcPage {
    constructor() {
        this.message = null;
        this.imc = null;
        this.valid = {
            masse: true,
            taille: true,
        };
        this.user = {
            masse: null,
            taille: null,
        };
    }
    ngOnInit() {
    }
    submit() {
        this.message = null;
        this.imc = null;
        this.valid.masse = true;
        this.valid.taille = true;
        if (!this.user.masse) {
            this.valid.masse = false;
        }
        if (!this.user.taille) {
            this.valid.taille = false;
        }
        if (this.user.masse && this.user.taille) {
            this.valid.masse = true;
            this.valid.taille = true;
            const { message, imc } = this.calculImc(this.user);
            this.message = message;
            this.imc = imc;
        }
    }
    calculImc(user) {
        let message = '';
        const imc = user.masse / (user.taille * user.taille);
        if (imc < 16.5) {
            message = 'dénutrition';
        }
        else if (imc >= 16.5 && imc < 18.5) {
            message = 'maigreur';
        }
        else if (imc >= 18.5 && imc < 25) {
            message = 'poids normal';
        }
        else if (imc >= 25 && imc < 30) {
            message = 'surpoids';
        }
        else if (imc >= 30 && imc < 35) {
            message = 'obésité modérée';
        }
        else if (imc >= 35 && imc < 40) {
            message = 'obésité sévère';
        }
        else if (imc >= 40) {
            message = 'obésité morbide ou massive';
        }
        return { message, imc };
    }
};
ImcPage.ctorParameters = () => [];
ImcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-imc',
        template: _C_Users_SWIFT_5_Documents_coding_DIC2_dev_mobile_tpmobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_imc_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_imc_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImcPage);



/***/ }),

/***/ 7429:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/imc/imc.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n    <ion-title>Indice de masse corporel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <div class=\"info-card-list\">\n      <ion-card>\n        <ion-item lines=\"none\" color=\"primary\">\n          <div class=\"card-title\">\n            <ion-label class=\"title\">\n              Calculer votre IMC\n            </ion-label>\n          </div>\n        </ion-item>\n        <ion-item class=\"content\">\n          <ion-list class=\"subLabels\">\n            <ion-item>\n              <ion-label position=\"floating\">\n                Renseignez votre masse en kilogrammes\n              </ion-label>\n              <ion-input\n                type=\"number\"\n                name=\"masse\"\n                [(ngModel)]=\"user.masse\"\n              ></ion-input>\n            </ion-item>\n            <label class=\"red\" *ngIf=\"!this.valid.masse\">Renseignez votre masse SVP !!!</label>\n            <ion-item>\n              <ion-label position=\"floating\">\n                Renseignez votre taille en mètres\n              </ion-label>\n              <ion-input\n                name=\"taille\"\n                type=\"number\"\n                [(ngModel)]=\"user.taille\"\n              ></ion-input>\n            </ion-item>\n            <label class=\"red\" *ngIf=\"!this.valid.taille\">Renseignez votre taille SVP !!!</label>\n            <div class=\"card-submit\" lines=\"none\" color=\"secondary\">\n              <div  (click)=\"submit()\">\n                  calculer\n              </div>\n            </div>\n          </ion-list>\n        </ion-item>\n      </ion-card>\n\n    </div>\n  </form>\n\n  <ion-card *ngIf=\"message && imc\">\n    <ion-list>\n      <ion-item lines=\"none\" color=\"tertiary\">\n        <div class=\"card-title\">\n          <ion-label class=\"title\">\n            Interprétation de l’IMC\n          </ion-label>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Votre IMC : <span>{{ imc }}</span>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Interprétation: <span>{{ message }}</span>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 2810:
/*!***********************************!*\
  !*** ./src/app/imc/imc.page.scss ***!
  \***********************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  text-align: center;\n}\n\nion-content .format-fiche-qualite {\n  width: 100vw;\n  height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nion-content .info-card-list {\n  margin-top: 5vh;\n}\n\nion-content .info-card-list ion-card ion-icon {\n  font-size: 2rem;\n}\n\nion-content .info-card-list ion-card .content ion-list {\n  width: 100%;\n}\n\nion-content .info-card-list ion-card .card-title {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nion-content .info-card-list ion-card .card-title .title {\n  font-weight: 600;\n}\n\nion-content .info-card-list ion-card .card-title .label-note {\n  border: 1px solid black;\n  width: 50px;\n  background-color: white;\n  color: black;\n}\n\nion-content .red {\n  color: red;\n  margin: 1vh;\n}\n\n.valid {\n  font-size: 1.2rem;\n}\n\n.card-submit {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5vh;\n}\n\n.card-submit div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30vw;\n  height: 10vh;\n  font-weight: 600;\n  background-color: var(--ion-color-success);\n  font-size: 1.2rem;\n  color: white;\n  border-radius: 10px;\n}\n\n.title {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\nspan {\n  font-weight: 600;\n  font-size: 1.2rem;\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQVI7O0FBS0k7RUFDSSxlQUFBO0FBSFI7O0FBT1k7RUFDSSxlQUFBO0FBTGhCOztBQVVnQjtFQUNJLFdBQUE7QUFScEI7O0FBYVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWGhCOztBQVlnQjtFQUNJLGdCQUFBO0FBVnBCOztBQWFnQjtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQVhwQjs7QUFxQkk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQW5CUjs7QUF1QkE7RUFDSSxpQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXBCSjs7QUFxQkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbkJSOztBQXVCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFwQko7O0FBdUJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBcEJKIiwiZmlsZSI6ImltYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAuZm9ybWF0LWZpY2hlLXF1YWxpdGV7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvLWNhcmQtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgXHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY29udGVudHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWxpc3R7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhYmVsLW5vdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnJlZHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIG1hcmdpbjogMXZoO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmFsaWR7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmNhcmQtc3VibWl0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_imc_imc_module_ts.js.map