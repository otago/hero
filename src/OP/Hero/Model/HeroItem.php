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
        'Subtitle' => 'Varchar(255)',
        'Introduction' => 'Text'
    ];

    private static $has_one = [
        'Image' => Image::class,
        'LinkTo' => Link::class
    ];

    private static $belongs_many_many = [
        'Heros' => Hero::class,
    ];

    private static $owns = [
        'Image',
        'LinkTo'
    ];

    private static $cascade_deletes = [
        'LinkTo',
    ];

    private static $summary_fields = [
        'ID' => 'ID',
        'Title' => 'Title',
        'Subtitle' => 'Subtitle',
        'Created' => 'Created',
        'LastEdited' => 'Last Edited',
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName([
            'Sort',
            'LinkToID',
            'Heros'
        ]);

        $fields->addFieldsToTab(
            'Root.Main',
            [
                LinkField::create('LinkTo', 'Link', $this)
            ]
        );

        return $fields;
    }

    public static function Summarise($summary)
    {
        if ($summary && strlen($summary) > 150) {
            $substring = substr($summary, 0, 150);
            return "$substring...";
        }
        return $summary;
    }

    public function getSummary()
    {
        return self::Summarise($this->Introduction);
    }
}
