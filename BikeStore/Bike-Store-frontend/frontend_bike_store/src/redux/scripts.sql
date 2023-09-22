CREATE TABLE public."Venta"
(
    "idVenta" serial NOT NULL,
    productos text[] NOT NULL,
    cantidad integer[] NOT NULL,
    "cantidaProductos" integer NOT NULL,
    total integer NOT NULL,
    date character varying NOT NULL,
    cliente character varying NOT NULL,
    PRIMARY KEY ("idVenta")
);

CREATE TABLE public."formulario_Envio"
(
    "idCompra" serial NOT NULL,
    departamento character varying NOT NULL,
    ciudad character varying NOT NULL,
    direccion character varying NOT NULL,
    telefono numeric NOT NULL,
    descripcion character varying NOT NULL,
    PRIMARY KEY ("idCompra")
);