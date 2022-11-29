<div class="op__hero--item">
    <img src="$Image.URL" alt="$Image.Title" />
    <div class="op__hero--item-content<% if $Subtitle %> has-subtitle<% end_if %>">
        <h1>
            <% if $LinkTo %>
                <% with $LinkTo %>
                    <% include Link Title=$Up.Title %>
                <% end_with %>
            <% else %>
                $Title
            <% end_if %>
        </h1>
        <% if $Subtitle %>
            <h2>$Subtitle</h2>
        <% end_if %>
        <p><span>$Summary</span>$LinkTo</p>
    </div>
</div>
