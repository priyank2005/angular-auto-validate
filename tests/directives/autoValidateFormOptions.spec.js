(function (document, angular, sinon) {
    'use strict';
    var sandbox, $rootScope,
        element, $compile,
        compileElement = function (html) {
            element = angular.element(html);
            $compile(element)($rootScope);
            $rootScope.$digest();
        };

    beforeEach(module('jcs-autoValidate'));

    describe('autoValidateFormOptions', function () {
        beforeEach(inject(function ($injector) {
            sandbox = sinon.sandbox.create();
            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
        }));

        afterEach(function () {
            sandbox.restore();
        });

        it('should be defined', function () {
            compileElement('<form name="test""></form>');

            expect(element.controller('form').autoValidateFormOptions).to.exist;
        });

        describe('disableDynamicValidation', function () {
            it('should set the property "disableDynamicValidation" on the form controller to true', function () {
                compileElement('<form name="test" disable-dynamic-validation="true"></form>');
                var controller = element.controller('form');
                expect(controller.autoValidateFormOptions.disabled).to.equal(true);
            });

            it('should set the property "disableDynamicValidation" on the form controller to true', function () {
                compileElement('<form name="test" data-disable-dynamic-validation="true"></form>');
                var controller = element.controller('form');
                expect(controller.autoValidateFormOptions.disabled).to.equal(true);
            });

            it('should set the property "disableDynamicValidation" on the form controller to true if it is used as a boolean attribute', function () {
                compileElement('<form name="test" disable-dynamic-validation></form>');

                expect(element.controller('form').autoValidateFormOptions.disabled).to.equal(true);
            });

            it('should set the property "disableDynamicValidation" on the form controller to false', function () {
                compileElement('<form name="test" disable-dynamic-validation="false"></form>');

                expect(element.controller('form').autoValidateFormOptions.disabled).to.equal(false);
            });

            it('should set the property "disableDynamicValidation" on the form controller to false if the attribute is not there', function () {
                compileElement('<form name="test"></form>');

                expect(element.controller('form').autoValidateFormOptions.disabled).to.equal(false);
            });
        });

        describe('validateNonVisibleControls', function () {
            it('should set the property "validateNonVisibleControls" on the form controller to true', function () {
                compileElement('<form name="test" validate-non-visible-controls="true"></form>');
                var controller = element.controller('form');
                expect(controller.autoValidateFormOptions.validateNonVisibleControls).to.equal(true);
            });

            it('should set the property "validateNonVisibleControls" on the form controller to true', function () {
                compileElement('<form name="test" validate-non-visible-controls="true"></form>');
                var controller = element.controller('form');
                expect(controller.autoValidateFormOptions.validateNonVisibleControls).to.equal(true);
            });

            it('should set the property "validateNonVisibleControls" on the form controller to true if it is used as a boolean attribute', function () {
                compileElement('<form name="test" validate-non-visible-controls></form>');

                expect(element.controller('form').autoValidateFormOptions.validateNonVisibleControls).to.equal(true);
            });

            it('should set the property "validateNonVisibleControls" on the form controller to false', function () {
                compileElement('<form name="test" validate-non-visible-controls="false"></form>');

                expect(element.controller('form').autoValidateFormOptions.validateNonVisibleControls).to.equal(false);
            });

            it('should set the property "validateNonVisibleControls" on the form controller to false if the attribute is not there', function () {
                compileElement('<form name="test"></form>');

                expect(element.controller('form').autoValidateFormOptions.validateNonVisibleControls).to.equal(false);
            });
        });
    });
}(document, angular, sinon));
