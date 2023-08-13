---
layout: style
title: Portfólio
page_number: 3
last_page: 0

---

<h1 class="name-page">Portfólio</h1>
<div class="grid">
<div class="pagination">
            <a href="#" class="page-link voltar" onclick="goToPreviousPage()"><i class="fa-solid fa-angles-left"></i> Voltar</a>
            <a href="#" class="page-link ir" id="pagination-link" data-page-number="{{ page.page_number }}" data-last-page="{{ page.last_page }}" onclick="goToNextPage()">Próximo <i class="fa-solid fa-angles-right"></i></a>
  </div>
  {% for post in site.posts %}
    {% if post.path contains '/portfolio/page3' %}
      <div class="card-post">
        <img src="{{ post.image }}" alt="{{ post.title }}">
        <div class="text-post">
          <a class="title-post" href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
          <h4>{{ post.resumo }}</h4>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>