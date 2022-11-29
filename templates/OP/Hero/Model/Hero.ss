<% require javascript("otago/hero:client/dist/js/bundle.js") %>
<div class="op__hero">
    <div class="op__hero--items" style="left: 0%;">
        <% loop $Items %>
            <% include OP/Hero/Model/HeroItem %>
        <% end_loop %>
    </div>
    <div class="op__hero--controls">
        <button class="op__hero--controls-previous"><span>Previous</span></button>
        <button class="op__hero--controls-next"><span>Next</span></button>
    </div>
</div>
