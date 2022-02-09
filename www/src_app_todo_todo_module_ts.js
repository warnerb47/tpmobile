"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_todo_todo_module_ts"],{

/***/ 7009:
/*!*********************************************!*\
  !*** ./src/app/todo/todo-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoPageRoutingModule": () => (/* binding */ TodoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.page */ 8404);




const routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_0__.TodoPage
    }
];
let TodoPageRoutingModule = class TodoPageRoutingModule {
};
TodoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TodoPageRoutingModule);



/***/ }),

/***/ 3818:
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoPageModule": () => (/* binding */ TodoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-routing.module */ 7009);
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.page */ 8404);







let TodoPageModule = class TodoPageModule {
};
TodoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _todo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodoPageRoutingModule
        ],
        declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_1__.TodoPage]
    })
], TodoPageModule);



/***/ }),

/***/ 8404:
/*!***********************************!*\
  !*** ./src/app/todo/todo.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoPage": () => (/* binding */ TodoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_SWIFT_5_Documents_coding_DIC2_dev_mobile_tpmobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./todo.page.html */ 1788);
/* harmony import */ var _todo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.page.scss */ 8900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);





let TodoPage = class TodoPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.libelle = null;
        this.valid = true;
        this.doneList = [];
        this.unDoneList = [];
    }
    ngOnInit() {
    }
    addTask(libelle) {
        if (libelle) {
            this.unDoneList.push(libelle);
        }
    }
    onAddTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Nouvelle tâche',
                inputs: [
                    {
                        name: 'libelle',
                        type: 'text',
                        placeholder: 'Entrer le libellé de la tâche'
                    },
                ],
                buttons: [
                    {
                        text: 'annuler',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'valider',
                        handler: (value) => {
                            if (value.libelle) {
                                console.log(value.libelle);
                                this.addTask(value.libelle);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    markDone(libelle) {
        if (libelle) {
            const index = this.unDoneList.indexOf(libelle);
            if (index > -1) {
                this.unDoneList.splice(index, 1);
                this.doneList.push(libelle);
            }
        }
    }
    markUnDone(libelle) {
        if (libelle) {
            const index = this.doneList.indexOf(libelle);
            if (index > -1) {
                this.doneList.splice(index, 1);
                this.unDoneList.push(libelle);
            }
        }
    }
    deleteTask(libelle, doneList = true) {
        if (libelle && doneList) {
            const index = this.doneList.indexOf(libelle);
            if (index > -1) {
                this.doneList.splice(index, 1);
            }
        }
        else if (libelle && !doneList) {
            const index = this.unDoneList.indexOf(libelle);
            if (index > -1) {
                this.unDoneList.splice(index, 1);
            }
        }
    }
    onDeleteTask(libelle, doneList = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: ' supprimer cette tâche ?',
                message: 'Êtes vous sûres de vouloir supprimer cette tâche',
                buttons: [
                    {
                        text: 'annuler',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'supprimer',
                        id: 'confirm-button',
                        handler: () => {
                            this.deleteTask(libelle, doneList);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    submit() {
        this.valid = true;
        if (this.libelle) {
            this.addTask(this.libelle);
        }
        else {
            this.valid = false;
        }
    }
};
TodoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
TodoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-todo',
        template: _C_Users_SWIFT_5_Documents_coding_DIC2_dev_mobile_tpmobile_node_modules_ngtools_webpack_src_loaders_direct_resource_js_todo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_todo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TodoPage);



/***/ }),

/***/ 1788:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/todo/todo.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n    <ion-title>Todo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"onAddTask()\">\n    ajouter une tache\n  </ion-button>\n  <ion-card>\n    <ion-item *ngIf=\"unDoneList.length <= 0\" lines=\"full\" class=\"ion-activated\">\n      <ion-label> liste des tâches en cours vide </ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let item of unDoneList\" lines=\"full\" class=\"ion-activated\">\n      <ion-icon (click)=\"markDone(item)\" name=\"square-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{ item }} </ion-label>\n      <ion-icon name=\"trash\" (click)=\"onDeleteTask(item, false)\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n  </ion-card>\n  <ion-card>\n    <ion-item *ngIf=\"doneList.length <= 0\" lines=\"full\" class=\"ion-activated\">\n      <ion-label> liste des tâches finies vide </ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let item of doneList\" lines=\"full\" class=\"ion-activated\">\n      <ion-icon (click)=\"markUnDone(item)\" name=\"checkbox-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"done\"> {{ item }} </ion-label>\n      <ion-icon name=\"trash\" (click)=\"onDeleteTask(item, true)\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 8900:
/*!*************************************!*\
  !*** ./src/app/todo/todo.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".done {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJ0b2RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb25lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_todo_todo_module_ts.js.map