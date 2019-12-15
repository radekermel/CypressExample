describe('Lets try to do the same thing as in Testcafe', function () {
    it('Press every button!', function () {
        cy.visit('');
        cy.contains('Example');
        cy.get('#developer-name').type('Some name of test user');
        cy.get('#remote-testing').click();
        cy.get('#reusing-js-code').click();
        cy.get('#background-parallel-testing').click();
        cy.get('#continuous-integration-embedding').click();
        cy.get('#traffic-markup-analysis').click();
        cy.get('#tried-test-cafe').click();
        cy.get('#linux').click();
        cy.get('#preferred-interface').select('JavaScript API');
        cy.get('#slider').click(200,5);
        cy.get('#comments').type('Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. Ut bibendum sem eget elit placerat luctus. ' +
            'Vestibulum iaculis ut ex vitae bibendum. Vestibulum ante ipsum primis in ' +
            'faucibus orci luctus et ultrices posuere cubilia Curae; Mauris imperdiet ' +
            'bibendum ultrices. Vivamus vitae purus quis odio suscipit lobortis. ' +
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ' +
            'ac turpis egestas. Duis in aliquam diam. Pellentesque suscipit semper turpis, ' +
            'eu hendrerit tortor egestas vel.');
        cy.get('#submit-button').click();
        cy.contains('test');
    });
});