<?php

namespace OP\Hero\Admin;

use OP\Hero\Model\Hero;
use OP\Hero\Model\HeroItem;
use SilverStripe\Admin\ModelAdmin;

class Admin extends ModelAdmin
{
    private static $menu_title = 'Heros';
    private static $url_segment = 'heros';

    private static $menu_icon_class = 'font-icon-picture';

    private static $managed_models = [
        Hero::class,
        HeroItem::class
    ];
}
