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
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BSEnterprises.Domain.BillingSpareParts.BillingSparePart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CustomerAddress");

                    b.Property<string>("CustomerContact");

                    b.Property<string>("CustomerGstin");

                    b.Property<string>("CustomerName");

                    b.Property<string>("CustomerState");

                    b.Property<DateTime>("Date");

                    b.Property<string>("PlaceOfSupply");

                    b.Property<double>("TotalInvoiceValue");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("BillingSpareParts");
                });

            modelBuilder.Entity("BSEnterprises.Domain.BillingSpareParts.BillingSparePartItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BillingSparePartId");

                    b.Property<double>("CgstAmount");

                    b.Property<double>("Discount");

                    b.Property<string>("HsnCode");

                    b.Property<double>("IgstAmount");

                    b.Property<int>("ProductId");

                    b.Property<double>("Quantity");

                    b.Property<double>("Rate");

                    b.Property<double>("SgstAmount");

                    b.Property<double>("TaxableValue");

                    b.Property<double>("Total");

                    b.HasKey("Id");

                    b.HasIndex("BillingSparePartId");

                    b.ToTable("BillingSparePartItems");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Companies.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContactNumber");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

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

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Engineers");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EngineerId");

                    b.Property<DateTime>("OrderDate");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("EngineerId");

                    b.HasIndex("UserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CompanyId");

                    b.Property<double>("LeftInBag");

                    b.Property<int?>("OrdersId");

                    b.Property<int>("ProductId");

                    b.Property<double>("Quantity");

                    b.Property<double>("ReturnDefective");

                    b.Property<int>("SparePartId");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

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

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("UserId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("BSEnterprises.Domain.SpareParts.SparePart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code");

                    b.Property<string>("HsnSac");

                    b.Property<bool>("IsActive");

                    b.Property<string>("Model");

                    b.Property<string>("Name");

                    b.Property<DateTime>("OpeningDate");

                    b.Property<double?>("Price");

                    b.Property<int>("ProductId");

                    b.Property<double?>("RateOfTax");

                    b.Property<double>("StockInHand");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("SpareParts");
                });

            modelBuilder.Entity("BSEnterprises.Domain.UserModule.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AccountNumber");

                    b.Property<string>("Address");

                    b.Property<string>("BankName");

                    b.Property<string>("ContactNumber");

                    b.Property<string>("Email");

                    b.Property<string>("Gstin");

                    b.Property<string>("IfscCode");

                    b.Property<string>("Name");

                    b.Property<string>("Pan");

                    b.Property<string>("State");

                    b.Property<string>("Subject");

                    b.Property<string>("TermsAndCondition");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BSEnterprises.Domain.BillingSpareParts.BillingSparePart", b =>
                {
                    b.HasOne("BSEnterprises.Domain.UserModule.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("BSEnterprises.Domain.BillingSpareParts.BillingSparePartItem", b =>
                {
                    b.HasOne("BSEnterprises.Domain.BillingSpareParts.BillingSparePart")
                        .WithMany("BillingSparePartItems")
                        .HasForeignKey("BillingSparePartId");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Companies.Company", b =>
                {
                    b.HasOne("BSEnterprises.Domain.UserModule.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Engineers.Engineer", b =>
                {
                    b.HasOne("BSEnterprises.Domain.UserModule.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.Order", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Engineers.Engineer", "Engineer")
                        .WithMany()
                        .HasForeignKey("EngineerId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BSEnterprises.Domain.UserModule.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("BSEnterprises.Domain.Orders.OrderItem", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Companies.Company", "Company")
                        .WithMany("OrderItems")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Restrict);

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

                    b.HasOne("BSEnterprises.Domain.UserModule.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("BSEnterprises.Domain.SpareParts.SparePart", b =>
                {
                    b.HasOne("BSEnterprises.Domain.Products.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BSEnterprises.Domain.UserModule.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
