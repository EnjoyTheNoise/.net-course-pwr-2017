namespace PGSBoard.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DbUpdate : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Cards", "PositionId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Cards", "PositionId", c => c.Int(nullable: false));
        }
    }
}
