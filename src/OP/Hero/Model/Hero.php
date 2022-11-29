<?php

namespace OP\Hero\Model;

use SilverStripe\ORM\DataObject;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;

class Hero extends DataObject
{
    private static $table_name = 'OP_Hero_Model_Hero';

    private static $db = [
        'Title' => 'Varchar(255)'
    ];

    private static $has_many = [
        'Items' => HeroItem::class
    ];

    private static $owns = [
        'Items'
    ];

    private static $cascade_deletes = [
        'Items',
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $items = $fields->fieldByName("Root.Items.Items");
        if ($items) {
            ($items->getConfig())->addComponent(new GridFieldOrderableRows());
        }
        return $fields;
    }

    public function getSlides()
    {
        return $this->Items;
    }
}
