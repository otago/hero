<?php

namespace OP\Hero\Admin;

use OP\Hero\Model\Hero;
use SilverStripe\Admin\ModelAdmin;

class Admin extends ModelAdmin
{
    private static $menu_title = 'Heros';
    private static $url_segment = 'headers';

    private static $menu_icon_class = 'font-icon-picture';

    private static $managed_models = [
        Hero::class
    ];
}
