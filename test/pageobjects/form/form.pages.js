class formPage{
    get formOption (){
        return $('~Forms')
    }
    async goToform(){
        this.formOption.click()
    }
    get campoForm(){
        return $('//android.widget.EditText[@content-desc="text-input"]')
    }   
    get getOf(){
        return $('~switch')
    }
    async off(){
        this.getOf.click()
    }
    get buttonActive(){
        return $("~button-Active")
    }
    async active(){
        this.buttonActive.click()
    }
    get campoText(){
        return $('android.widget.Button')
    }
    async textOk(){
        this.campoText.getText()
    }
}
module.exports = new formPage()