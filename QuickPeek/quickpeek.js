'use strict';

(function (qp, undefined) {
	$(document).ready(function () {
		qp.bodyEl = $('body');
		qp.peekDiv = $('<div id="quickpeek" style="position:fixed; bottom:0px; right:0px; color:#ffffff; background-color:#53a93f; z-index:10;"></div>');
		qp.bodyEl.append(qp.peekDiv);

		qp.bodyEl.on('DOMNodeInserted', 'ul.umb-tree li.root ul li', function () {
			var newEl = $('ul.umb-tree li.root ul li > div:first-of-type');
			newEl.on('mouseover', function () {
				var $this = $(this);
				var scope = angular.element($this).scope();
				var node = scope.node;

				if (node.id != "init") {
					qp.peekDiv.text(node.id);
					qp.peekDiv.show();
				}
			});

			newEl.on('mouseout', function () {
				qp.peekDiv.hide();
			});

		});
	});
}(window.QuickPeek = window.QuickPeek || {}));
