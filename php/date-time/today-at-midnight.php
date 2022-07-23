<?php

date_default_timezone_set('America/Los_Angeles');

echo 'Now: ' . time();

echo '------------------------';

echo 'Midnight: ' . strtotime('today midnight');

echo '------------------------';

echo strtotime('today midnight') - time();

