<?php

$data = file_get_contents("php://input");
$recievedData = json_decode($data);

$pokemon = $recievedData->pokemon;

$url = "http://pokemondb.net/pokedex/" . $pokemon;
$html = file_get_contents($url);
$DOM = new DOMDocument();
@$DOM->loadHTML($html);
$finder = new DomXPath($DOM);

// Type
$classname = 'type-icon';
$nodes = $finder->query("//*[contains(@class, '$classname')]");
$type = array();
foreach ($nodes as $node) {
  array_push($type, $node->nodeValue);
}

// Picture
// $picture = "https://img.pokemondb.net/artwork/" . strtolower($pokemon) . ".jpg";
$picture = "https://img.pokemondb.net/sprites/black-white/anim/normal/" . strtolower($pokemon) . ".gif";

// Height
$height = array();
$nodes = $finder->query("//*[contains(@class, 'vitals-table')]/tbody/tr[4]/td");
///li[@id='svtabs_basic_1']/div[1]/div[2]/table/tbody/tr[4]/td
foreach ($nodes as $node) {
  array_push($height, $node->nodeValue);
}

// Weight
$weight = array();
$nodes = $finder->query("//*[contains(@class, 'vitals-table')]/tbody/tr[5]/td");
foreach ($nodes as $node) {
  array_push($weight, $node->nodeValue);
}

// Catch Rate
$catchrate = array();
$nodes = $finder->query("//*[contains(@class, 'vitals-table')]/tbody/tr[2]/td");
foreach ($nodes as $node) {
  array_push($catchrate, $node->nodeValue);
}

// Catch Rate
$basehappiness = array();
$nodes = $finder->query("//*[contains(@class, 'vitals-table')]/tbody/tr[3]/td");
foreach ($nodes as $node) {
  array_push($basehappiness, $node->nodeValue);
}

// Catch Rate
$baseexp = array();
$nodes = $finder->query("//*[contains(@class, 'vitals-table')]/tbody/tr[4]/td");
foreach ($nodes as $node) {
  array_push($baseexp, $node->nodeValue);
}

// Catch Rate
$growthrate = array();
$nodes = $finder->query("//*[contains(@class, 'vitals-table')]/tbody/tr[5]/td");
foreach ($nodes as $node) {
  array_push($growthrate, $node->nodeValue);
}

$catchrate[1] = preg_replace("/\([^)]+\)/","", $catchrate[1]);

$allInfo = array($type[0], $picture, $height[0], $weight[0], $catchrate[1], $basehappiness[1], $baseexp[1], $growthrate[1]);

echo json_encode($allInfo);

?>
