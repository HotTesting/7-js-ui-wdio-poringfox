import { expect } from "chai";
describe('Protractor', function () {
    it('Should be alive', function () {
        browser.url('/')
        console.log('--Test passed!')
    })
    describe("Items search", function () {
        it("should show results in case multiple items matches", function () {
            $('[class= "form-control"][type = "search"]').click();
            browser.pause(3000);
            $('[class= "form-control"][type = "search"]').setValue("Duck");
            browser.pause(3000);
            $('[class= "form-control"][type = "search"]').addValue('Enter');
            browser.pause(3000);
            $('[class="product column"][data-name$="Duck"]').isDisplayed();

            // throw new Error("NOT IMPLEMENTED");
        });

        it("should redirect to item page in case only one result matches", function () {
            $(`[class= "form-control"][type = "search"]`).click();
            browser.pause(3000);
            $(`[class= "form-control"][type = "search"]`).setValue("Yellow");
            browser.pause(3000);
            $(`[class= "form-control"][type = "search"]`).addValue('Enter');
            browser.pause(3000);
            $('[class="img-responsive"][title="VIP Yellow Duck"]').isDisplayed();

        //     // throw new Error("NOT IMPLEMENTED");
        });

        it("should redirect to 'no matching results' in case no items matched", function () {
            $(`[class= "form-control"][type = "search"]`).click();
            browser.pause(3000);
            $(`[class= "form-control"][type = "search"]`).setValue("Test");
            browser.pause(3000);
            $(`[class="form-control"][type = "search"]`).addValue('Enter');
            browser.pause(3000);
            expect(`No matching results`).to.be.equal($(`.box#box-search-results em`).getText());
            browser.pause(3000);
        //     // throw new Error("NOT IMPLEMENTED");
        });
    })
})