define(["./stub"], function (stub) {
	"use strict";
	describe("tests", function () {
		describe("for JavaScript!", function () {


			describe("when game is started add start time properties", function () {			
				var game;

				before(function () {
					game = stub.stubGame();
					game = addUniversalStartTimePropertiesToGame(game);
				});

				it("it should have start time properties", function () {
					assert.equal(game.locations.ciccone[0], "Az");
				});
			});


			describe("when using neighbor lookup service neighbors are found", function () {
				before(function () {
				});

				it("it should return neighboring cells", function () {
					assert.equal(getCellDown("Go"), "Ho");
					assert.equal(getCellLeft("Go"), "Gn");
					assert.equal(getCellRight("Go"), "Gp");
					assert.equal(getCellUp("Go"), "Fo");
				});
			});


			describe("when fishing for cell value by way of magic string expectations are met", function () {			
				var game;

				before(function () {
					game = stub.stubGame();
				});

				it("it should return value", function () {
					assert.equal(getCellValue(game, "Bh"), "gold.x");
					assert.equal(getCellValue(game, "Gh"), "dispel.x");
					assert.equal(getCellValue(game, "Kr"), "hyperspace.x");
				});
			});


			describe("when attempting to move Ciccone left there are sanity checks", function () {			
				var game;

				before(function () {
					game = stub.stubGame();
					game = addUniversalStartTimePropertiesToGame(game);
				});

				it("it should return true or false as appropriately applicable", function () {
					assert.equal(isAbleToMoveLeft(game, "Az"), true);
					assert.equal(isAbleToMoveLeft(game, "Bz"), false);
					assert.equal(isAbleToMoveLeft(game, "Ko"), false);
					game.isUnlocked = true;
					assert.equal(isAbleToMoveLeft(game, "Ko"), true);
				});
			});


		});
	});
});