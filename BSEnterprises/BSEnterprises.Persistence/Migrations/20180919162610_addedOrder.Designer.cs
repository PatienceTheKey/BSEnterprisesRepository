﻿// <auto-generated />
using BSEnterprises.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace BSEnterprises.Persistence.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20180919162610_addedOrder")]
    partial class addedOrder
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BSEnterprises.Domain.Companies.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContactNumber");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Engineers.Engineer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("ContactNumber");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Engineers");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EngineerId");

                    b.Property<DateTime>("OrderDate");

                    b.HasKey("Id");

                    b.HasIndex("EngineerId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("OrdersId");

                    b.Property<int>("ProductId");

                    b.Property<double>("Quantity");

                    b.Property<int>("SparePartId");

                    b.HasKey("Id");

                    b.HasIndex("OrdersId");

                    b.HasIndex("ProductId");

                    b.HasIndex("SparePartId");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Products.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CompanyId");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<double?>("Price");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("BSEnterprises.Domain.SpareParts.SparePart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<double?>("Price");

                    b.Property<int>("ProductId");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("SpareParts");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.Order", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Engineers.Engineer", "Engineer")
                        .WithMany()
                        .HasForeignKey("EngineerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.OrderItem", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Orders.Order", "Orders")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrdersId");

                    b.HasOne("BSEnterprises.Domain.Products.Product", "Product")
                        .WithMany("OrderItems")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("BSEnterprises.Domain.SpareParts.SparePart", "SparePart")
                        .WithMany("OrderItems")
                        .HasForeignKey("SparePartId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("BSEnterprises.Domain.Products.Product", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Companies.Company", "Company")
                        .WithMany()
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("BSEnterprises.Domain.SpareParts.SparePart", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Products.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
