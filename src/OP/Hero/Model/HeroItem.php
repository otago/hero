<?php

namespace OP\Hero\Model;

use gorriecoe\LinkField\LinkField;
use SilverStripe\Assets\Image;
use SilverStripe\ORM\DataObject;

class HeroItem extends DataObject
{
    private static $table_name = 'OP_Hero_Model_HeroItem';

    private static $db = [
        'Title' => 'Varchar(255)',
        'Introduction' => 'Text',
        'Sort' => 'Int'
    ];

    private static $has_one = [
        'Hero' => Hero::class,
        'Image' => Image::class,
        'LinkTo' => Link::class
    ];

    private static $owns = [
        'Image'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab(
            'Root.Main',
            [
                LinkField::create('LinkTo', 'Link', $this)
            ]
        );

        return $fields;
    }
}
