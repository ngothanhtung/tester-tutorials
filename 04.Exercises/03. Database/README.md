# Data Integrity Testing in Software Testing

Every software development process follows Software Development Life Cycle (SDLC) for the developing and delivering a good quality software product. In the testing phase of software development different types of software testing are performed to check different check parameters or test cases. Where in each software data is an important part as with the help of data a software application performs its operations. Testing allows us to make data actionable. It is a great way of improvement without getting caught up in different reports and issues for doing the previous jobs. So, to check data integrity of the software application data integrity testing is performed. In this article we will explore about data integrity testing.

So before exploring about the concept of data integrity testing, let’s first know what is this data integrity. Actually this data Integrity refers to the reliability and trustworthiness of data through its life cycle that is stored in Database. Now let’s know about data integrity testing.

## Data Integrity Testing:

- It is a process in which data is verified in database whether it is accurate and functions as per requirements. Also used to validate whether data is not modified, corrupted unexpectedly while accessing the Database.
- Tests are done regularly to ensured stored data is unchanged and to search for new bugs which may alter with the files present in Database.

## Characteristics of Data Integrating Testing:

1. Data compatibility with older version of OS is ensured.
2. It checks while verifying data in data tables, it is altered or not.
3. It examines all data whether it is successfully saved to Database or not.
4. It also includes running test of all data files which includes clip art, templates etc.
5. Also helps in analyzing blank value or default value whether it can be retrieved from Database or not.

## Why Database & Database Testing is required?

- To check whether map is connected between front end and back end i.e. Database such that all functionality done in front end are reflected in back end and vice versa.
- To verify ACID (Accuracy, Consistency, Integrity, Durability) property of Database.
- As in constant increase in size of data, complexity of Database increases which evokes relational constrains. So it is recommended to ensure flawless Database Operation.
- We can ensure data integrity such that changes occurred afar CRUD operation should be reflected correctly whenever data is stored in any form.

## How to test Data Integrity :

**Data integrity can be examined using following tests**

1. Check whether you can add, delete, modify ay data in tables.
2. Check whether a blank or default value can be retrieved from Database.
3. Verify that radio buttons show right set of values.
4. Check when a set of data is saved successfully in Database, truncation must not occur.
5. Check the compatibility of different version of OS, old hardware, interfaces with other software.
6. Check whether default value is assigned when user input is not given.

## Types of Data Integrity Test:

**There are mainly three types of data integrity test**

- **Entity Integrity** –
  It examines that each row of a table consists of non-null primary key where each should be specific. The test may be attained defining duplicate or null values in test data.
- **Domain Integrity** –
  It checks that each set of data value. Column falls with a specific permissible range. Testing may be achieved using null, default and invalid values.
- **Referential Integrity** –
  It checks relationship between a foreign key and primary key of multiple table. This test is achieved by eliminating parent or child row in a table.
