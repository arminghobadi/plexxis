CREATE TABLE EMPLOYEE (
  id         INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR (40)                NOT NULL,
  code       VARCHAR (20)                NULL,
  profession VARCHAR (100)               NULL,
  color      VARCHAR (30)                NULL,
  city       VARCHAR (100)               NULL,
  branch     VARCHAR (100)               NULL,
  assigned   CHAR (1)                         NULL
);

INSERT INTO EMPLOYEE VALUES (
  1, 
  "Kyle Lowry", 
  "F100", 
  "Drywall Installer", 
  "#FF6600", 
  "Brampton", 
  "Abacus", 
  "Y")
