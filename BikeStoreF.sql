PGDMP                          {         
   BikeStoreF    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16400 
   BikeStoreF    DATABASE     �   CREATE DATABASE "BikeStoreF" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "BikeStoreF";
                postgres    false            �            1259    16505    productos_idproducto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_idproducto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.productos_idproducto_seq;
       public          postgres    false            �            1259    16512 	   productos    TABLE     N  CREATE TABLE public.productos (
    idproducto integer DEFAULT nextval('public.productos_idproducto_seq'::regclass) NOT NULL,
    nombre character varying(50) NOT NULL,
    precio integer NOT NULL,
    descripcion character varying(200) NOT NULL,
    tipo character varying(25) NOT NULL,
    imagen character varying(250) NOT NULL
);
    DROP TABLE public.productos;
       public         heap    postgres    false    216            �            1259    16466    usuarios_idusuario_seq    SEQUENCE        CREATE SEQUENCE public.usuarios_idusuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuarios_idusuario_seq;
       public          postgres    false            �            1259    16467    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    idusuario integer DEFAULT nextval('public.usuarios_idusuario_seq'::regclass) NOT NULL,
    username character varying(25),
    email character varying(25),
    password character varying(25)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false    214                      0    16512 	   productos 
   TABLE DATA           Z   COPY public.productos (idproducto, nombre, precio, descripcion, tipo, imagen) FROM stdin;
    public          postgres    false    217   J       �          0    16467    usuarios 
   TABLE DATA           H   COPY public.usuarios (idusuario, username, email, password) FROM stdin;
    public          postgres    false    215   �                  0    0    productos_idproducto_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.productos_idproducto_seq', 26, true);
          public          postgres    false    216            	           0    0    usuarios_idusuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuarios_idusuario_seq', 4, true);
          public          postgres    false    214            o           2606    16519    productos productos_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (idproducto);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    217            m           2606    16472    usuarios usuarios_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (idusuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    215               \   x�32�)J�V.�/*Q0202�46 N�����ԒD��T��Ģ�Ԣ�bNgCO��(Y?��8��X?37]��X�:���*H����� �""      �   M   x�3�L,N�LtH�K���44�2	�ŊS�,��0�LN���ɇR鹉�9P]�\&�Y�y`I��+F��� ?�V     