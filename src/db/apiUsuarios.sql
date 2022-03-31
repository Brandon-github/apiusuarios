------ Creacion de base de datos
CREATE DATABASE apiUsuarios;

------ Usar Base de datos
USE apiUsuarios;

------ Creacion de tablas

---- Creacion de tabla roles
CREATE TABLE roles(
    id_rol INT NOT NULL,
    nombre VARCHAR(90) NOT NULL
);

-- Modificacion de tabla roles
ALTER TABLE roles
    MODIFY id_rol INT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY(id_rol)
    ;

---- Creacion de tabla usuarios
CREATE TABLE usuarios(
    id_usuario INT NOT NULL,
    nombre VARCHAR(120) NOT NULL,
    correo VARCHAR(120) NOT NULL,
    id_rol INT NOT NULL
);

-- Modificacion de tabla usuarios
ALTER TABLE usuarios
    MODIFY id_usuario INT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY(id_usuario),
    ADD FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
    ;

------ Insertacion de datos

---- Insertacion de datos para la tabla roles
INSERT INTO roles(nombre)
    VALUES
    ('Administrador'),
    ('Auxiliar'),
    ('Invitado')
    ;

---- Insertacion de datos para la tabla usuarios
INSERT INTO usuarios(nombre, correo, id_rol)
    VALUES
    ('Alex Gonzalez', 'AleGon@gmail.com', 1),
    ('Jhon Quintero', 'JhoQui@gmail.com', 2),
    ('Maria Perez', 'MarPer@gmail.com', 3),
    ('Andres Suarez', 'AndSua@gmail.co,', 2)
    ;

