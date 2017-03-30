import { test } from 'qunit';

import moduleForAcceptance from 'sony-assignment/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | twitchSearch');

test('should show search as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/twitchSearch', 'should redirect automatically');
  });
});