<?php

namespace App\Event;

use Laminas\EventManager\Event;

class ApifyUnauthorizedEvent extends Event
{
    const NAME = 'apify.unauthorized';
}