CREATE TABLE EMPLOYEE (
  EmployeeId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FirstName    VARCHAR (40)                      NULL,
  LastName     VARCHAR (40)                      NULL,
  Phone        VARCHAR (20)                      NULL,
  Address      VARCHAR (100)                     NULL,
  City         VARCHAR (30)                      NULL,
  FullName     VARCHAR (100)                     NULL,
  Email        VARCHAR (100)                     NULL,
  Pin          VARCHAR (100)                     NULL,
  EmployeeCode VARCHAR (10) UNIQUE               NOT NULL
) ENGINE = INNODB;

INSERT INTO EMPLOYEE (FirstName, LastName, Phone, Address, City, FullName, Email, Pin, EmployeeCode)
VALUES ('laalohaillaallah', 'ghobadi', 945214775, 'sherbourne st', 'toronto', 'armin laalohaillaallah ghobadi', 'armin@smack.chat', 1, '11')
