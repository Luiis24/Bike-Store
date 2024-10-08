PGDMP     0    !                {         
   BikeStoreF    14.9    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394 
   BikeStoreF    DATABASE        CREATE DATABASE "BikeStoreF" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "BikeStoreF";
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            �           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    4            �            1259    16395    productos_idproducto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_idproducto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.productos_idproducto_seq;
       public          postgres    false    4            �            1259    16396 	   productos    TABLE     �  CREATE TABLE public.productos (
    idproducto integer DEFAULT nextval('public.productos_idproducto_seq'::regclass) NOT NULL,
    marca character varying(20) NOT NULL,
    nombre character varying(50) NOT NULL,
    precio integer NOT NULL,
    tipo character varying(25) NOT NULL,
    color character varying(25) NOT NULL,
    talla character varying(5) NOT NULL,
    descripcion character varying(1000) NOT NULL,
    imagen character varying(200) NOT NULL
);
    DROP TABLE public.productos;
       public         heap    postgres    false    209    4            �            1259    16402    usuarios_idusuario_seq    SEQUENCE        CREATE SEQUENCE public.usuarios_idusuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuarios_idusuario_seq;
       public          postgres    false    4            �            1259    16403    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    idusuario integer DEFAULT nextval('public.usuarios_idusuario_seq'::regclass) NOT NULL,
    username character varying(25),
    email character varying(25),
    password character varying(25)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false    211    4            �          0    16396 	   productos 
   TABLE DATA           o   COPY public.productos (idproducto, marca, nombre, precio, tipo, color, talla, descripcion, imagen) FROM stdin;
    public          postgres    false    210   �       �          0    16403    usuarios 
   TABLE DATA           H   COPY public.usuarios (idusuario, username, email, password) FROM stdin;
    public          postgres    false    212   U'       �           0    0    productos_idproducto_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.productos_idproducto_seq', 34, true);
          public          postgres    false    209            �           0    0    usuarios_idusuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.usuarios_idusuario_seq', 5, true);
          public          postgres    false    211            d           2606    16408    productos productos_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (idproducto);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    210            f           2606    16410    usuarios usuarios_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (idusuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    212            �      x��[�v#Ir�1_�K:B�D��c=6�ݧwُCpfh�IT%�$�*�z���d��G�hyk��g�ua�/�Kt#"� ك�1�I��7n܈HN7�y�}R�zc�X]'����!�\�45�_M�������z{�5��s��6�qj*��6��M�z4E��V�T����S��b��EarW҇	�Կ�FUF�L������P:U6/+�㻵�ӱ)�F�ln�P�:�M���fZ��W�\��j���t�>�bab,o���~�PU�.S��7a�V�)�
�����ѥ���VN-[]�²Vq��©�.��.��:�9n?OWwZ�si2T�쐺I`*�v�g�&��I�xw�[/a�b�me�l?ժ���5�L�Sßb��)�rX�I+7��">�ei���f˃���9�����J�V���X���0�N��G�qt����+u��3�u�B�7V�j�Y������`7�����
[V~kX����%����m�a����tN�/ݼ 4�aQ�	a���_��?������z�n��_����k@'v��0�7�.qM��U�<~Y���Q}T��b����^�M&O������;xF���Z�d)Ơ�'0�Slo������b�.�ۧ� H( ha�e�	�v�t��1�~���M�贪�z>d�
>`�6W'jM���������]a���A��
��j���N��#uE~�=�˂ݔ%\P�`��Ҹ�T�3چ�Mw�:#��#����Wx�2�kv
�����P�z:�������z'�T��pJ��˕�K��=W�.~�ݹ'���VA$C�7����a)�JyC��X�K�:��Єa@J6w���R��@J ���
KW��%�?�_!^�S��\Y�X��w�::��Y��͝Q���������$aF�[�i���\���s�`~��R��y�--tR �俕CÝ�iCo#�KX����Wd���1�H����LU�d��2��sm�Zf��*�}�LR�A���!-��IB���
���`r��s���G\����t��ƂK�pK�H�!��}�fW����G
����S*��28�Z��S��'+�:�d
S8����Y�9&���[f�)�#��l��&JdK��q'�⳼�]C��X���V�}����������/'b���.;x(ޗn�2&�4V�G��#5DÊ|� ���O0�|��cWz����	�2z��nn�,�*�D�q��꟣�(�����I���ߴ+sh�u�XH�R�MC�L}e'G�W5�g֔[�^�eB�E�\Ԟ��c(�^�-I���||x������\t���xKx��[�c�C�U��l�R�+�7!�2��N�y�n%a�C��#���P8����}r���$�3�Y
�&
�&qe��x�;���BH�����%�.�5:� ����L��s�T�M�?���Ͳ��ݺ�V��S�,v;�����?�I9�%�뻑���V�,&��)߫L�N��|���4�EH���`jH�t���z�uҺ2^\g�^�bY"�)hYS��+U��F�X��IیԻn~�
�2����-��!Y 
���B�� �I�^M&:5�mc%p�GH(|$oӊp���&S�[�(oFX5�X���	�C&���� �Ɨ!x\���� �.+zA��`��d:�b�g?��>�D�G�w�f:����0E'Ǎ^:�}Ry�k�#�tBX��@�%)vf���Plk�+k!p��*��e����03d��DF�ʵ��`�u7��z���RA���G�"i��\!�([s��s���<[jQi�$�X�t��QB�{��-q&e$@�P�J��%u�6w�m閥$���|J.�����|��Ak{vduxf0����s��w
ތ�z*������
l
�S*�j@k-{�%�����C6'�?)�R8;n2��d|׎�d�.݃Q��d�M;��f��<'�(ˆ(4���b����f��^|徨k� ���xtJ�Lqt/�q�,�1f�yi�� ~kx����9��*�:�����;$�qM��sm�.��|c(t M�@�����q����r�/��}-y�����_��h��b:x$V  "٨[u�<�O	�op����ʄ�2�_�� /��"`r�ԩ�RZznUAE~�;�F���+�`�<��Sc��kYc):��F:/,�t�6��J����s�Mj��r�D�0*��&e�K,^}i�%L�|�@��JSU�X��!C%�j��G4�6{���$C�\����=�+�������,"�?��?t
{D'jL��슦��$j��� �8viuL.J��&�Svcj"u��t�����ۡt$���&�a�@5��%נ)NE ��Q�\Ñ��b�	�ԡ2���\��P9��\1�P�\G�k�6H���:m�"�C���r-�����������7���7�fk�>���ܳ��X��Z���n`�Dt���~M̕�*��W���_Q�k�D��;�h���(�6���ύ���{IꗒW�.�$�eFp����oi�T(�b�� 4�C�g��D�����HU��V�ǬjR���pj��:���vHbƕ�����r��di�R��0��l".�}u�Ogjp��`�<Pm�Nk3�@�^.�܊=��Y���ǩ��-`HV�����)EʊD9gԎ+z
��Le�+�&aXK�M���ʇ}:A�7��[��qD�Je2��2M�Jg+�Q�4�r��iQ���%ͱG�j�{���;�1�b�ӄE5�:I�ʍNE-��%�fQ��N��P�[x|SlqW	�ٳ'h�^ōө0 y�6���݆,��?�u0T���u�j>���t�ԥ} �oMؗ,n=��&�q$X��1����y��"� S���>	����6����j�~+����M��n[������ ���6��aZ1l����w�m~[ŭ�]Ѫ�������tz�1�e�]�UP"�@5H͖��x1��8 BpQ_��^@�*)�
� �Q�6�����s�8Ԛ��~Rm\B���}t{s��J�YA�u��pJ-���D�贵�_r��I��M�q����n���-WT�K{a<��˦+4Rx�NhG�������P��$��������^���L<8���[�P�?��$N�e����㟺޷�'��ݐWZ��G&��#�+`��X�#O�(�O!�+=�����fN�����n��ݻ���Q�n\�S
_n�4��|��'+�	?�xd@�i�T�.�k��VZ�����q������ �_��y,�T,�cZ"J�e��P˟/�ڰ��1����&?:���Gbq�S|����۝Q^M�'�"}uE�e�v~R�������{�vEZ�(��N��~����3����v�gɶ��]&+0/�ĺ[�K��`�@k�zG�3�ó)��s���h�5D?��Άj��)U\�ľ��/�� L��r�� �Ƴt\De��բ&M</]17��P��X:	��G�
-�4�Ƒ���$_���V�r��bQu�.6�X�&�H�mڞpXI4F�?���!r�Fb�ۍ
�H��$U���q��2]'��Ϡ6a<2��8���D�ܘ()i���${���4��B���
@����eU���m|I�E�b��kE�/.� <=;���c	���� j�d-$�JK8��¢�4__�(��;%[h�H���'D[�e{
.	��Ǒ�!�h�B��ڡM�rp�|=�e����%��J�ak�t�Vh�u��Skg|�_K�	W|�������) �Rq�d2����i��j0�1߰W�)��-���#�sE��-�R��G�#�k̲��i� :���	���
[e��B¬�l
��^sj��w9F`���Q0�[���ŧ�7��L:6=z!�S������=��b�ϸ��d�ːg���_�N�u�HK�˨	����z�QT�*=g��)�$�"$�,�/�n��e�N�w����+�9�VwHgk��}'aܦdiR���Ui�3��C�j�Q �  �G�8R>�tj��y��&����z�~v�e�q�g�7�Q8�H��;��k��w�YP	�:L�R�dJ�Cf&iQ���_嵽�5HɈ�n�]�ڋj ���t���
	��ǿ@QA�<  %��=���~�
��pw��h�D��n `8��vK	I�~I�z �púkm��T��ߎGS�+�O�Ƒ{�
#m/�g��\4#r@��P9�a�,d�m.'O������������ۯ��#\r@��E��ʸŤS����G<��S?�Z>Rs��b- ��v�	><`|���B�!ź���ՌD	��%5�V �w@��`2N�07�u��x�.��0]fZ(sy�Hs�)I�xK��F��u� #%lo��?�1O0[}3!�m���⢑rN��ɝCٛ�r�#�Ӫ̗fĚ�K3b>8X�$E	p.��Ō�E6'{br�}�Bju>�S�4��>wX#_�~�L�l�wm�a�'�H�6�P�Y������tO�� jIN���b)]S���"||FN����֥z܆���ɀ|��N2��g�G�����ܻ�=Q���7b�+�;��OP[����Z!,\Z<� ��q�\�ͪRg���~|r6��#^2ֻ��9�����K��;3ܪ��J	����W����X��J����������LNQ�?cII�U<��p�R3_���_�:��L�)l�A�	+:� �lՆ�Ql�FךG�W�f�����׃W���dXF/=�h^!�ԗ����9+�*�
z\xlB��
 @�A�b�/<t��Ψ��(��$4?A����4MZ>74~iѶyJ;9n��܊id�28��;X��z��{�5T�c$���QE�F��{��� ��Q��7֞��g�M V���&�붍�o����n�sV�mK��"����K�8Z�β���R�'_ ���)V�YÓ&�&>�1�=7�q@uO,����iG��+���)XIh�&����4Kx������It�_�+���Nc��=��������/����(��$+L��^�������_	�J�Y�����J��=�7ڤ4�I���N��g���e|����I,g�)4H�'8|OC�D������si��o��Y��`w]�W��u�M6]K>ˈb����J�h`��k�P��3����>��cV�?��9;̮��`<��X.�Cq��{�_�u/���K�2;!TAL�C�M�H��ގ�����f�1N�i�<���㞎"�����|�(��^Qh���}'Î�;�0}���Ҧ]�uN�S�ΐ�{]��ȶ��a�'��.��;:�P��7n�ނ��e\t��� \q��m�nF�[T��^W;�N�����mk��o]��I�_τӬ�����)4�ai�������误 ��H������ӈ�*!?�0t௵�M����O?���Eخ      �   d   x�M�;� ��Ð�1j�Al6�g�+O/
�}��d$P�@����B��Ɗ���*48�r��ġW�WNm�.3NP(=��=x/nL����M ��+�     