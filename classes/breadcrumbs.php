<?php
namespace Grav\Theme;

use Grav\Common\Grav;

class Breadcrumbs
{

    public function __construct()
    {
    }

    /**
     * Get breadcrumb array from article
     *
     * @return array
     */
    public function getFromArticle( $article )
    {

      $hierarchy = array();

      if (!$article) {
          return;
      }

      $article = $article->parent();

      while ($article && !$article->root()) {
          $hierarchy[$article->url()] = $article;
          $article = $article->parent();
      }

      return array_reverse($hierarchy);
    }

}
