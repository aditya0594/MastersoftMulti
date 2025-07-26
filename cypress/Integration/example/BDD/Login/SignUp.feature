Feature: To test the sign up of consumer
    Scenario: To signup with the valid consumer details
    Given Open the signup page
    When Enter email address and other
    Then Verify the Go to Web site button is visible

    Scenario: To verify admin user will able to accept consumer user
    Given Open admin sso admin portal
    When Login to the admin with gabrial email
    Then Go to the User Management
    And Click on the added consumer eye button
    And Click on verify user button and confirm wait for the sso certificate and verify the certificate
  
    Scenario Outline: Verify the consumer kyc form 
    Given Open login page
    When Login to the existing user
    And Enter all the invalid details in "<field>" check the error "<message>"" 
    
    Examples:
    |field|message|
    
