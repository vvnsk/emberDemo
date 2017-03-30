import { test } from 'qunit';
import moduleForAcceptance from 'sony-assignment/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | twitchSearch');

test('should show search as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/twitchSearch', 'should redirect automatically');
  });
});

test('should list searched streams', function (assert) {
   visit('/twitchSearch');
    click('button');
    andThen(function() {
      assert.notEqual($(".result").html(),"null", 'should list streams');
    });
});

test('should be able to navigate forward in paginaation', function (assert) {
});

test('should be able to navigate backward in paginaation', function (assert) {
});