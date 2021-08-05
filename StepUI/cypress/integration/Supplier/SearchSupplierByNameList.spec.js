let searchNameList = [
    'Mya Acevedo',
    'Maximillian Torres',
    'Myles Leach',
    'Daniella Zuniga',
    'Dax Buck',
    //'Charles Larsen',
    'Haiden Rose',
    'Keegan Potter',
    'Julissa Krause',
    'Erin Shelton',
    //'Cheyenne Hooper',
    'Kian Norman'
]
function searchSupplierName(search_name) {

    let reassign_success_alert_text = 'Supplier is Successfully initiated to Update Supplier grouping List'
    let unassign_success_alert_text = 'Re-assign cancelled Successfully'
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div table tbody tr:nth-child(1) td table tbody tr:nth-child(2) td .stb-SearchBox").clear().type(search_name)
    cy.wait(2000)
    cy.get('body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(8) > div > div:nth-child(2) > div > div > div > button.button-secondary.ResetButton > div > span').click({force: true})
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div table tbody tr:nth-child(1) td table tbody tr:nth-child(2) td .stb-SearchBox").clear().type(search_name)
    cy.wait(2000)
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div div button.button-secondary.SearchButton").click()
    cy.wait(2000)
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr > th > span > span > label").click()
    cy.wait(2000)
    cy.get("#toolbar_button_Re-Assign_Supplier_Group > div").click()
    cy.wait(10000)

}

describe('Regression suite', () => {
    beforeEach(()=>{
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce("JSESSIONID", "portal_username", "id");
        Cypress.Cookies.debug(true)   
        cy.clearCookies()
        
        
    })
    afterEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce("JSESSIONID", "portal_username", "id");
        Cypress.Cookies.debug(true)  
        cy.clearCookies()
    })
    it('Supplier name search', () => {
        cy.clearCookies()
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.config().baseUrl)
        cy.wait(5000)
        cy.get('body > div.container > div > table > tbody > tr:nth-child(6) > td:nth-child(1) > a').click()
        cy.wait(6000)
        cy.get('[id=username-input]').clear().type(Cypress.config().username)
        cy.get('[id=password-input]').clear().type(Cypress.config().password)
        cy.get('[id=login-button]').click()
        cy.wait(5000)

        cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
        cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1)").click()
        
        cy.get("#stibo_stackpanel_Supplier_Name_Search").click()
        for (let index = 0; index < searchNameList.length; index++) {
            searchSupplierName(searchNameList[index])
        }
        cy.wait(2000)
    })
})