<% if $Links %>
    <button class="op-header__toggle-subnav">
        <% if $Title %>
            <span>
                $Title
                <% if $Subtitle %>
                    <span>$Subtitle</span>
                <% end_if %>
            </span>
        <% end_if %>
        $SVGHTML
    </button>
    <ul class="<% if $Content %> has-content<% end_if %>">
        <li class="$LinkingMode $CSSClass">
            <a{$IDAttr}{$ClassAttr} <% if $LinkURL %>href="{$LinkURL}"<% end_if %> {$TargetAttr}>
                <% if $Title %><strong>$Title</strong><% end_if %>
                $SVGHTML
            </a>
        </li>
        <% loop $Links %>
            <li class="$LinkingMode $CSSClass" <% if $BottomMargin %>style="margin-bottom: $BottomMargin;"<% end_if %>><% include OP\Header\Model\Item Header=$Up.Header %></li>
        <% end_loop %>
        <% if $Content %>
            <li class="op-header__content $CSSClass">
                $Image
                <span>$Content</span>
                <span>$LinkTo</span>
                <% with $Header %>
                    <span>$Content</span>
                    <span class="op-header__social">
                        <ul>
                            <% loop $SocialMediaLinks %>
                                <li class="$CSSClass">
                                    <a{$IDAttr}{$ClassAttr} <% if $LinkURL %>href="{$LinkURL}"<% end_if %> {$TargetAttr}>
                                        $SVGHTML
                                    </a>
                                </li>
                            <% end_loop %>
                        </ul>
                    </span>
                <% end_with %>
            </li>
        <% end_if %>
    </ul>
<% else %>
    <a{$IDAttr}{$ClassAttr} <% if $LinkURL %>href="{$LinkURL}"<% end_if %> {$TargetAttr}>
        <% if $Title %>
            <% if $Bold %>
                <strong>$Title</strong>
            <% else %>
                <span>
                    $Title
                    <% if $Subtitle %>
                        <span>$Subtitle</span>
                    <% end_if %>
                </span>
            <% end_if %>
        <% end_if %>
        $SVGHTML
    </a>
<% end_if %>
