const formPages = require("../pageobjects/form/form.pages");

describe('Funcionality form', () => {
    it('Fill form with success', async () => {

        await formPages.goToform()
        await formPages.campoForm.addValue("Teste Modulo 16")
        await formPages.off()
        await formPages.active()
        await formPages.textOk()
        const text = await $('android.widget.TextView')
        await expect(text).toExist('This button is')
        

    })
})