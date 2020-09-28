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
(N'Elon Musk', 3600000, N'Desarrollador-fronend', N'https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg'),
(N'Carlos Carmona', 1200000, N'Vicepresidente', N'https://pbs.twimg.com/profile_images/854424193483583488/BJiy2IFJ_400x400.jpg'),
(N'Camila Avendaño', 3800500, N'Ingeniera Industrial', N'https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
GO

SELECT * FROM ESchema.Employees;
GO