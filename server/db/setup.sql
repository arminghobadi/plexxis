CREATE TABLE EMPLOYEE (
  id         INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR (40)                NOT NULL,
  code       VARCHAR (20)                NULL,
  profession VARCHAR (100)               NULL,
  color      VARCHAR (30)                NULL,
  city       VARCHAR (100)               NULL,
  branch     VARCHAR (100)               NULL,
  assigned   VARCHAR (3)                 NULL
);

INSERT INTO EMPLOYEE VALUES (
  1, 
  "Kyle Lowry", 
  "F100", 
  "Drywall Installer", 
  "#FF6600", 
  "Brampton", 
  "Abacus", 
  "Yes"),(
    2,
    "DeMar DeRozan",
    "F101",
    "Drywall Installer",
    "yellow",
    "Brampton",
    "Pillsworth",
    "No"
  ),(
    3,
    "Fred Van Vleet",
    "F102",
    "Drywall Installer",
    "green",
    "Bolton",
    "Abacus",
    "No"
  ),(
    4,
    "Jonas Valanciunas",
    "F103",
    "Drywall Installer",
    "#333333",
    "Bolton",
    "Pillsworth",
    "Yes"
  ),(
    5,
    "Chris Bosh",
    "F104",
    "Drywall Installer",
    "#FF6600",
    "Brampton",
    "Abacus",
    "Yes"
  ),(
    6,
    "Marcus Camby",
    "F105",
    "Runner",
    "red",
    "Brampton",
    "Pillsworth",
    "No"
  ),(
    7,
    "Vince Carter",
    "F106",
    "Runner",
    "red",
    "Toronto",
    "Abacus",
    "No"
  )
