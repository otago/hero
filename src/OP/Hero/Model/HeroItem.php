<?php

namespace OP\Hero\Model;

use gorriecoe\Link\Models\Link;
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
        'Image',
        'LinkTo'
    ];

    private static $cascade_deletes = [
        'LinkTo',
    ];

    private static $default_sort = 'Sort';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName([
            'Sort',
            'LinkToID',
            'HeroID'
        ]);

        $fields->addFieldsToTab(
            'Root.Main',
            [
                LinkField::create('LinkTo', 'Link', $this)
            ]
        );

        return $fields;
    }

    public function getSummary()
    {
        if ($this->Introduction && strlen($this->Introduction) > 150) {
            $substring = substr($this->Introduction, 0, 150);
            return "$substring...";
        }
        return $this->Introduction;
    }
}
