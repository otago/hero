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

    private static $many_many = [
        'Items' => HeroItem::class
    ];

    private static $many_many_extraFields = [
        'Items' => [
            'Sort' => 'Int'
        ]
    ];

    private static $owns = [
        'Items'
    ];

    private static $cascade_deletes = [
        'Items',
    ];

    private static $summary_fields = [
        'ID' => 'ID',
        'Title' => 'Title',
        'Created' => 'Created',
        'LastEdited' => 'Last Edited',
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
        return $this->Items->sort("Sort");
    }
}
