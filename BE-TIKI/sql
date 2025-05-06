script postgres 
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS cart_id_seq;

-- Table Definition
CREATE TABLE "public"."cart" (
    "id" int4 NOT NULL DEFAULT nextval('cart_id_seq'::regclass),
    "image_large" text NOT NULL,
    "description" text NOT NULL,
    "top_deal" bool DEFAULT false,
    "support_delivery" bool DEFAULT false,
    "guarantee" bool DEFAULT false,
    "address" text NOT NULL,
    "price" int4,
    "id_user" int4 NOT NULL,
    CONSTRAINT "cart_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id"),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS cate_id_seq;

-- Table Definition
CREATE TABLE "public"."cate" (
    "id" int4 NOT NULL DEFAULT nextval('cate_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS cate_detail_id_seq;

-- Table Definition
CREATE TABLE "public"."cate_detail" (
    "id" int4 NOT NULL DEFAULT nextval('cate_detail_id_seq'::regclass),
    "name" varchar(255),
    "id_cate" int4,
    CONSTRAINT "cate_detail_id_cate_fkey" FOREIGN KEY ("id_cate") REFERENCES "public"."cate"("id"),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS customer_id_seq;

-- Table Definition
CREATE TABLE "public"."customer" (
    "id" int4 NOT NULL DEFAULT nextval('customer_id_seq'::regclass),
    "name" varchar(255),
    "email" varchar(255),
    "address" text,
    "id_user" int4,
    "password" varchar(100),
    CONSTRAINT "customer_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."users"("id"),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS manufacturer_id_seq;

-- Table Definition
CREATE TABLE "public"."manufacturer" (
    "id" int4 NOT NULL DEFAULT nextval('manufacturer_id_seq'::regclass),
    "name" varchar(255),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS orders_id_seq;

-- Table Definition
CREATE TABLE "public"."orders" (
    "id" int4 NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    "image_large" text,
    "description" text,
    "top_deal" bool,
    "support_delivery" bool,
    "guarantee" bool,
    "address" text,
    "price" int4,
    "id_user" int4,
    "phone" text,
    "name" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS products_id_seq;

-- Table Definition
CREATE TABLE "public"."products" (
    "id" int4 NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    "name" varchar(255),
    "id_cate" int4,
    "image_large" text,
    "images" text,
    "description" text,
    "badges_icon" text,
    "support_delivery" bool,
    "deal" int4,
    "top_deal" bool,
    "price" int4,
    "rate" int4,
    "color" varchar(100),
    "id_manufacturer" int4,
    "guarantee" varchar(255),
    "quantity_buy" int4,
    "size_products" text,
    "id_cate_detail" int4,
    "madein" text,
    CONSTRAINT "products_id_cate_fkey" FOREIGN KEY ("id_cate") REFERENCES "public"."cate"("id"),
    CONSTRAINT "products_id_manufacturer_fkey" FOREIGN KEY ("id_manufacturer") REFERENCES "public"."manufacturer"("id"),
    CONSTRAINT "products_id_cate_detail_fkey" FOREIGN KEY ("id_cate_detail") REFERENCES "public"."cate_detail"("id"),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS schedule_id_seq;

-- Table Definition
CREATE TABLE "public"."schedule" (
    "id" int4 NOT NULL DEFAULT nextval('schedule_id_seq'::regclass),
    "id_order" int4,
    "times" timestamp,
    "description" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS shipping_id_seq;

-- Table Definition
CREATE TABLE "public"."shipping" (
    "id" int4 NOT NULL DEFAULT nextval('shipping_id_seq'::regclass),
    "name_user" text,
    "address" text,
    "email" text,
    "name" text,
    "image_large" text,
    "support_delivery" bool,
    "deal" text,
    "color" text,
    "price" int4,
    "size_products" text,
    "status" text,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "phone" varchar(20),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."cart" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user") VALUES
(7, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 82);
INSERT INTO "public"."cart" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user") VALUES
(8, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 82);
INSERT INTO "public"."cart" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user") VALUES
(9, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 82);
INSERT INTO "public"."cart" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user") VALUES
(10, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 82),
(14, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 83),
(15, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 83),
(16, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 83),
(17, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', 'Hà NộiCầu GiấyNghĩa Tân', 53453454, 83);

INSERT INTO "public"."cate" ("id", "name") VALUES
(5, 'Đồ gia dụng');
INSERT INTO "public"."cate" ("id", "name") VALUES
(6, 'Đồ Điện tử');


INSERT INTO "public"."cate_detail" ("id", "name", "id_cate") VALUES
(1, 'Bếp Điện saco', 5);
INSERT INTO "public"."cate_detail" ("id", "name", "id_cate") VALUES
(2, 'Bếp Điện toshiba', 5);
INSERT INTO "public"."cate_detail" ("id", "name", "id_cate") VALUES
(3, 'Tủ lạnh', 5);
INSERT INTO "public"."cate_detail" ("id", "name", "id_cate") VALUES
(4, 'Tủ lạnh', 6),
(5, 'Bếp', 6),
(6, 'Máy giặt', 6);

INSERT INTO "public"."customer" ("id", "name", "email", "address", "id_user", "password") VALUES
(2, 'Nguyen Phuoc Du', NULL, NULL, NULL, 'a4543@');
INSERT INTO "public"."customer" ("id", "name", "email", "address", "id_user", "password") VALUES
(3, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$5ePkwSamVuBzI4kLKgZExO4AEfJnakohKKjzfZPyS8skp9alPpe3q');
INSERT INTO "public"."customer" ("id", "name", "email", "address", "id_user", "password") VALUES
(4, NULL, NULL, NULL, NULL, '$2b$10$8FMNYc01cFhaMH4jW6eP5OzCZOEdte04GtCF4jh5riPw.2S99wSLi');
INSERT INTO "public"."customer" ("id", "name", "email", "address", "id_user", "password") VALUES
(5, NULL, NULL, NULL, NULL, '$2b$10$C6mTA2vOH/9SV8rBjbX3x.w8xmFRG/dNknLYpFvrKWMZnQVFySFG6'),
(6, NULL, NULL, NULL, NULL, '$2b$10$0oHtkmzsQt/Wz7TtOhRSeeGoN2J2BN78.6y2Xx3uTof3OwAQXZLr2'),
(7, NULL, NULL, NULL, NULL, '$2b$10$NKGZ/4bAk0ouwAmapZK2dOvJEVB18q29FSQu3eduQD8JU3HUiig7u'),
(8, NULL, NULL, NULL, NULL, '$2b$10$E69SumBtb2Apo.k34ju8Qe0B9JXCTZcElqm0UN9m9X7X1qMAHdIda'),
(9, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$9fJbMLKuI0WnLaIxAZdZ/eZBXTJGMG5uXlDjBdLiC3iqnEb.kYFT.'),
(10, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$PGqskIBNSn5nPLTCMvN6PO4Wm/eUIMuiAIGFny3q0FvCXv43Ts6aK'),
(11, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$NhDgHSg3zg3HI6J5tFXuHOvKr4Q5fOoQCx5fVsXKi10w7D3pxNjO.'),
(12, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$KUOddQMkvvqGTRYH7lUd9uEWRjDtkNmUb8vVTCcpiNHjYwAGMfeye'),
(13, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$I8HQkkJwf0XnGeYqiNn8jeuHF.mlPP/1KG1j/GpETTOWxYSOnzmIO'),
(14, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$9VdeMRZuDMsXg3/rKPNiC.dpXFJw7Mt8h8R6B6fWbdfZhIpvfFLxC'),
(15, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$Zg9kBK3wE/bBFO7x5wGV2eALDiLinzQ6dhVxFZkiKYoJrmWlk.lmi'),
(16, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$bOeLwb26fHsWTIyf7b38rudb9CSI2.EWHs0vLrrR.A/ifbqwDEGIS'),
(17, 'Nguyen Phuoc Du', NULL, NULL, NULL, '$2b$10$D5sMO0uI3TUnThKdt3X6ruLuIGGqunQd2XBM6BXkfRjiYsVlbM5sW'),
(1, 'Nguyen Phuoc Du', NULL, NULL, 80, NULL),
(18, NULL, NULL, NULL, 82, NULL),
(19, NULL, NULL, NULL, 83, NULL);

INSERT INTO "public"."manufacturer" ("id", "name") VALUES
(1, 'Toshiba');


INSERT INTO "public"."orders" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user", "phone", "name") VALUES
(1, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh');
INSERT INTO "public"."orders" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user", "phone", "name") VALUES
(2, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh');
INSERT INTO "public"."orders" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user", "phone", "name") VALUES
(3, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh');
INSERT INTO "public"."orders" ("id", "image_large", "description", "top_deal", "support_delivery", "guarantee", "address", "price", "id_user", "phone", "name") VALUES
(4, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(5, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(6, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(7, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(8, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(9, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(10, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(11, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(12, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(13, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(14, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(15, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(16, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(17, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(18, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(19, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(20, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(21, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(22, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(23, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(24, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(25, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(26, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(27, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(28, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(29, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(30, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(31, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(32, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(33, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(34, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(35, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(36, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(37, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(38, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(39, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(40, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(41, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(42, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(43, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(44, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(45, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(46, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(47, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(48, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(49, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(50, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(51, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(52, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(53, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(54, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(55, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(56, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(57, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(58, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(59, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(60, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(61, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(62, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(63, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(64, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(65, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(66, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(67, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 481081086, 83, '0896359374', 'Nguyễn Phúc Thịnh'),
(68, '1744724008684-570152738.png', 'máy lạnh đến từ nhà toshiba', 't', 't', 'f', '13 Đường số 14, Phường An Lạc A, Quận Bình Tân, Hồ Chí Minh', 53453454, 83, '0896359374', 'Nguyễn Phúc Thịnh');

INSERT INTO "public"."products" ("id", "name", "id_cate", "image_large", "images", "description", "badges_icon", "support_delivery", "deal", "top_deal", "price", "rate", "color", "id_manufacturer", "guarantee", "quantity_buy", "size_products", "id_cate_detail", "madein") VALUES
(1, 'Tủ lạnh Toshiba ', 5, '1744724008684-570152738.png', '["1744724008685-173724259.jpg","1744724008695-977260385.jpg"]', 'máy lạnh đến từ nhà toshiba', '[''fdsfsd'']', 't', 10, 't', 53453454, 4, 'red', 1, 'bảo hành 12 tháng', 4, '[''120l'',''110l'']', 1, 'VietNam');
INSERT INTO "public"."products" ("id", "name", "id_cate", "image_large", "images", "description", "badges_icon", "support_delivery", "deal", "top_deal", "price", "rate", "color", "id_manufacturer", "guarantee", "quantity_buy", "size_products", "id_cate_detail", "madein") VALUES
(2, 'Tủ lạnh Toshiba', 5, '1744724008684-570152738.png', '["1744724008685-173724259.jpg","1744724008695-977260385.jpg"]', 'máy lạnh đến từ nhà toshiba', '[''fdsfsd'']', 't', 10, 't', 53453454, 4, 'red', 1, 'bảo hành 12 tháng', 4, '[''120l'',''110l'']', 1, 'China');
INSERT INTO "public"."products" ("id", "name", "id_cate", "image_large", "images", "description", "badges_icon", "support_delivery", "deal", "top_deal", "price", "rate", "color", "id_manufacturer", "guarantee", "quantity_buy", "size_products", "id_cate_detail", "madein") VALUES
(3, 'Tủ lạnh Toshiba', 5, '1744722846001-421952443.png', '["1744724008685-173724259.jpg","1744724008695-977260385.jpg"]', 'máy lạnh đến từ nhà toshiba', '[''fdsfsd'']', 't', 10, 't', 53453454, 4, 'red', 1, 'bảo hành 12 tháng', 4, '[''120l'',''110l'']', 1, 'Japan');
INSERT INTO "public"."products" ("id", "name", "id_cate", "image_large", "images", "description", "badges_icon", "support_delivery", "deal", "top_deal", "price", "rate", "color", "id_manufacturer", "guarantee", "quantity_buy", "size_products", "id_cate_detail", "madein") VALUES
(4, 'Tủ lạnh Toshiba', 5, '1744723638293-120430273.png', '["1744724008685-173724259.jpg","1744724008695-977260385.jpg"]', 'máy lạnh đến từ nhà toshiba', '[''fdsfsd'']', 't', 10, 't', 53453454, 4, 'red', 1, 'bảo hành 12 tháng', 4, '[''120l'',''110l'']', 1, 'Korean'),
(5, 'Tủ lạnh Toshiba', 5, '1744724008684-570152738.png', '["1744724008685-173724259.jpg","1744724008695-977260385.jpg"]', 'máy lạnh đến từ nhà toshiba', '[''fdsfsd'']', 't', 10, 't', 53453454, 4, 'red', 1, 'bảo hành 12 tháng', 4, '[''120l'',''110l'']', 1, 'VietName');



INSERT INTO "public"."shipping" ("id", "name_user", "address", "email", "name", "image_large", "support_delivery", "deal", "color", "price", "size_products", "status") VALUES
(1, 'Nguyen Phuoc Du', NULL, NULL, 'Áo thun nam', 'https://example.com/image.jpg', 't', '20', 'Đen', 200000, 'L', 'pending');


INSERT INTO "public"."users" ("id", "phone") VALUES
(17, '02583945834');
INSERT INTO "public"."users" ("id", "phone") VALUES
(19, '0916616077');
INSERT INTO "public"."users" ("id", "phone") VALUES
(20, '0916616077');
INSERT INTO "public"."users" ("id", "phone") VALUES
(21, '0916616077'),
(22, '0916616077'),
(23, '0916616077'),
(24, '0916616077'),
(25, '0916616077'),
(26, '0916616077'),
(27, '0916616077'),
(28, '0916616077'),
(29, '0916616077'),
(30, '0916616077'),
(31, '0916616077'),
(32, '0916616077'),
(33, '0916616077'),
(34, '0916616077'),
(35, '0916616077'),
(36, '0916616077'),
(37, '0916616077'),
(38, '0916616077'),
(39, '0916616077'),
(40, '0916616077'),
(41, '0916616077'),
(42, '0916616077'),
(43, '0916616077'),
(44, '0916616077'),
(45, '0915285552'),
(46, '0915285552'),
(47, '0915285552'),
(48, '0915285552'),
(49, '0915285552'),
(50, '0915285552'),
(51, '0915285552'),
(52, '0915285552'),
(53, '0915285552'),
(54, '0915285552'),
(55, '0915285552'),
(56, '0915285552'),
(57, '0915285552'),
(58, '0915285552'),
(59, '0915285552'),
(60, '0915285552'),
(61, '0915285552'),
(62, '0915285552'),
(63, '0915285552'),
(64, '0915285552'),
(65, '0915285552'),
(66, '0915285552'),
(67, '0915285552'),
(68, '0915285552'),
(69, '0915285552'),
(70, '0915285552'),
(71, '0915285552'),
(72, '0915285552'),
(73, '0915285552'),
(74, '0915285552'),
(75, '0915285552'),
(76, '0915285552'),
(77, '0915285552'),
(78, '0915285552'),
(79, '0915285552'),
(80, '0915285552'),
(81, '0915285552'),
(82, '0915285552'),
(83, '0915285552');
