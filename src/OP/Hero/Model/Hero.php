<?php

namespace OP\Hero\Model;

use SilverStripe\ORM\DataObject;

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

        echo '<Pre>'; var_dump("Add the sort functionality"); die();

        // $fields->addFieldsToTab(
        //     'Root.Main',
        //     [
        //         // $fields->fieldByName("Root.Items.Items")
        //     ]
        // );

        return $fields;
    }
}
