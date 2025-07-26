Feature: To Login on the GAED folder

    Scenario Outline: To Login to gaed portal with valid email
        Given open the gaed portal
        When open the login page "<email>"
        Then It should open the login page

        Examples:
            | email                      |
            | adityapawar180@yopmail.com |
            | danmark@yopmail.com        |
    Scenario Outline: To Login to gaed portal with Invalid email
        
        Given open the gaed portal
        When open the login page only "<Invalidemail>"
        Then It should show the error message of invalid email

        Examples:
            | Invalidemail                     |
            | adityapawar180yopmail.com |
            | danmark@yopmail           |

    Scenario: To Login to gaed portal with empty email
        
        Given open the gaed portal
        When open the login page and enter empty email
        Then It should show the error message of email

   

