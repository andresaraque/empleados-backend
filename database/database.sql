CREATE SCHEMA ESchema;
GO

CREATE TABLE ESchema.Employees (
  Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  Nombre NVARCHAR(60) NOT NULL,
  Salario INT NOT NULL,
  Cargo NVARCHAR(50) NOT NULL,
  Img NVARCHAR(230) NOT NULL,
);
GO

INSERT INTO ESchema.Employees (Nombre, Salario, Cargo, Img) VALUES
(N'Jared', 2200000, N'Frontend', N'aquí su imagen'),
(N'Nikita', 1200000, N'Backend', N'aquí su imagen'),
(N'Tom', 930500, N'Aseo', N'aquí su imagen');
GO

SELECT * FROM ESchema.Employees;
GO