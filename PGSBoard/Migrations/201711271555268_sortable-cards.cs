namespace PGSBoard.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sortablecards : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cards", "PositionCardId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Cards", "PositionCardId");
        }
    }
}
