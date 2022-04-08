// JavaScript source code
var CRM_FORM_TYPE_CREATE = 1;
var CRM_FORM_TYPE_UPDATE = 2;
var CRM_FORM_TYPE_READONLY = 3;
var CRM_FORM_TYPE_DISABLED = 4;
var CRM_FORM_TYPE_QUICKCREATE = 5;
var CRM_FORM_TYPE_BULKEDIT = 6;


//----------------------------------------------------------
function onSaveForm(executionObj) {

}
//---------------------------------------------------
function onLoadCreateForm() {

}
//---------------------------------------------------
function onLoadUpdateForm() {
    debugger;
    formContext.getControl("fax").setDisabled(true);
}
//---------------------------------------------------

function onLoadForm(executionContext) {
    debugger;
    //  alert("loaded");
    formContext = executionContext.getFormContext();
    GlobalContext = Xrm.Utility.getGlobalContext();

    formContext.data.entity.addOnSave(onSaveForm);

    formContext.getControl("fax").setDisabled(true);
    
    switch (formContext.ui.getFormType()) {
        case CRM_FORM_TYPE_CREATE:
            onLoadCreateForm();
            break;
        case CRM_FORM_TYPE_UPDATE:
            onLoadUpdateForm();
            break;
        case CRM_FORM_TYPE_READONLY:
            break;
        case CRM_FORM_TYPE_QUICKCREATE:
            break;
    }
}