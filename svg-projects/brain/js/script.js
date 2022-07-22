/**
* @author Mark Matanza
*
* Library Dependencies
*
* @version jQuery v3.4.1
* @version Bootstrap v4.3.1
* @version PopperJS 1.12.9
*
*/

(function($) {

  $(document).ready(function() {

    /* Create look up table */
    // usage: brainDictionary.prefrontalCortex.content

    var brainDictionary = {

      // Define global states

      // Colors
      fillColor: '#73C067',
      dotColor: '#00456B',
      lineColor: '#00456B',

      // Brain Modal
      modalId: '#brain-modal',
      modalTitle: '#brain-modal .modal-title',
      modalBody: '#brain-modal .modal-body',
      modalClose: '.modal-content .close',

      // Events
      activeElementHover: 'active-element-hover',
      dimElementHover: 'dim-element-hover',
      activeElementClick: 'active-element-click',
      dimElementClick: 'dim-element-click',
      brainSection: '.brain-section',

      // Prefrontal Cortex
      prefrontalCortex: {
        brainModalClass: 'prefrontal-cortex-modal',
        brainSection: '#prefrontal-cortex-section',
        brainGroup: '.prefrontal-cortex-group',
        brainLabel: 'Prefrontal Cortex',
        brainContent: '<ul><li>The prefrontal cortex helps the brain regulate emotions, make decisions, and develop memories.</li><li>Prefrontal cortex dysfunction has been linked to clinical depression.</li></ul>'
      },

      // Frontal Lobe
      frontalLobe: {
        brainModalClass: 'frontal-lobe-modal',
        brainSection: '#frontal-lobe-section',
        brainGroup: '.frontal-lobe-group',
        brainLabel: 'Frontal Lobe',
        brainContent: '<ul><li>The frontal lobe controls emotional expression, problem-solving, and other cognitive functions.</li><li>A lack of gamma-amino butyric acid in the frontal lobe can trigger anxiety and anxiety disorders.</li><li>A lack of dopamine an/or serotonin in the frontal lobe can trigger depression symptoms.</li></ul>'
      },

      // Thalamus
      thalamus: {
        brainModalClass: 'thalamus-modal',
        brainSection: '#thalamus-section',
        brainGroup: '.thalamus-group',
        brainLabel: 'Thalamus',
        brainContent: '<ul><li>The thalamus helps the body regulate arousal, mood, ando motor functions.</li><li>Thalamus problems can trigger bipolar depression.</li></ul>'
      },

      // Amygdala
      amygdala: {
        brainModalClass: 'amygdala-modal',
        brainSection: '#amygdala-section',
        brainGroup: '.amygdala-group',
        brainLabel: 'Amygdala',
        brainContent: '<ul><li>The amygdala helps the brian process emotions.</li><li>Increased activity in the amygdala has been linked to depression.</li><li>People dealing with major depressive disorder (MDD) tend to have an enlarged and hyperactive amygdala that can disrupt sleep and activity patterns.</li></ul>'
      },

      // Cerebellum
      cerebellum: {
        brainModalClass: 'cerebellum-modal',
        brainSection: '#cerebellum-section',
        brainGroup: '.cerebellum-group',
        brainLabel: 'Cerebellum',
        brainContent: "<ul><li>The cerebellum receives information from the brain's sensory systems and uses this information to coordinate balance, posture, and other motor movements.</li><li>A lack of epinephrine in the cerebellum can trigger depression.</li></ul>"
      },

      // Hippocampus
      hippocampus: {
        brainModalClass: 'hippocampus-modal',
        brainSection: '#hippocampus-section',
        brainGroup: '.hippocampus-group',
        brainLabel: 'Hippocampus',
        brainContent: "<ul><li>The hippocampus supports long-term memory.</li><li>Ongoing exposure to stress hormones affects the growth of nerve cells in the hippocampus.</li><li>The hippocampus tends to be smaller in people dealing with depression.</li></ul>"
      },

      // Temporal Lobe
      temporalLobe: {
        brainModalClass: 'temporal-lobe-modal',
        brainSection: '#temporal-lobe-section',
        brainGroup: '.temporal-lobe-group',
        brainLabel: 'Temporal Lobe',
        brainContent: "<ul><li>The temporal lobe receives sensory information and helps the brain understand the meaning of this information.</li><li>Temporal lobe neurotransmitters acetylcholine and norepinephrine can trigger depression.</li><li>Too much acetylcholine can trigger depression.</li><li>A lack of norepinephrine can trigger depression.</li></ul>"
      }


    };

    // Prefrontal Cortex
    $(brainDictionary.prefrontalCortex.brainGroup).on({

        mouseenter: function(e) {

          $(brainDictionary.prefrontalCortex.brainGroup).each(function(index) {

            $(this).addClass(brainDictionary.activeElementHover);

            $(brainDictionary.brainSection).not(brainDictionary.prefrontalCortex.brainGroup).addClass(brainDictionary.dimElementHover);

          });

        },
        mouseleave: function(e){

          $(brainDictionary.prefrontalCortex.brainGroup).each(function(index) {

            $(this).removeClass(brainDictionary.activeElementHover);

            $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

          });

        },
        click: function(e) {

          e.preventDefault();

          $(brainDictionary.prefrontalCortex.brainGroup).each(function(index) {

            $(this).addClass(brainDictionary.activeElementClick);

            $(brainDictionary.brainSection).not(brainDictionary.prefrontalCortex.brainGroup).addClass(brainDictionary.dimElementClick);

          });

          $(brainDictionary.modalId).modal(
          {
            backdrop: 'static',
            keyboard: false
          });

          $(brainDictionary.modalId).addClass(brainDictionary.prefrontalCortex.brainModalClass);

          // Call Brain Dictionary

          // Title
          $(brainDictionary.modalTitle).html(brainDictionary.prefrontalCortex.brainLabel);

          // Description
          $(brainDictionary.modalBody).html(brainDictionary.prefrontalCortex.brainContent);

          $(brainDictionary.modalClose).on('click', function(e) {

              $(brainDictionary.modalId).removeClass(brainDictionary.prefrontalCortex.brainModalClass);

              $(brainDictionary.prefrontalCortex.brainGroup).each(function(index) {

                $(this).removeClass(brainDictionary.activeElementClick);
                $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

              });
          });
        }
      });

      // Frontal Lobe
      $(brainDictionary.frontalLobe.brainGroup).on({

          mouseenter: function(e) {

            $(brainDictionary.frontalLobe.brainGroup).each(function(index) {

              $(this).addClass(brainDictionary.activeElementHover);

              $(brainDictionary.brainSection).not(brainDictionary.frontalLobe.brainGroup).addClass(brainDictionary.dimElementHover);

            });

          },
          mouseleave: function(e){

            $(brainDictionary.frontalLobe.brainGroup).each(function(index) {

              $(this).removeClass(brainDictionary.activeElementHover);

              $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

            });

          },
          click: function(e) {

            e.preventDefault();

            $(brainDictionary.frontalLobe.brainGroup).each(function(index) {

              $(this).addClass(brainDictionary.activeElementClick);

              $(brainDictionary.brainSection).not(brainDictionary.frontalLobe.brainGroup).addClass(brainDictionary.dimElementClick);

            });

            $(brainDictionary.modalId).modal(
            {
              backdrop: 'static',
              keyboard: false
            });

            $(brainDictionary.modalId).addClass(brainDictionary.frontalLobe.brainModalClass);

            // Call Brain Dictionary

            // Title
            $(brainDictionary.modalTitle).html(brainDictionary.frontalLobe.brainLabel);

            // Description
            $(brainDictionary.modalBody).html(brainDictionary.frontalLobe.brainContent);

            $(brainDictionary.modalClose).on('click', function(e) {

                $(brainDictionary.modalId).removeClass(brainDictionary.frontalLobe.brainModalClass);

                $(brainDictionary.frontalLobe.brainGroup).each(function(index) {

                  $(this).removeClass(brainDictionary.activeElementClick);
                  $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                });
            });
          }
        });

        // Thalamus
        $(brainDictionary.thalamus.brainGroup).on({

            mouseenter: function(e) {

              $(brainDictionary.thalamus.brainGroup).each(function(index) {

                $(this).addClass(brainDictionary.activeElementHover);

                $(brainDictionary.brainSection).not(brainDictionary.thalamus.brainGroup).addClass(brainDictionary.dimElementHover);

              });

            },
            mouseleave: function(e){

              $(brainDictionary.thalamus.brainGroup).each(function(index) {

                $(this).removeClass(brainDictionary.activeElementHover);

                $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

              });

            },
            click: function(e) {

              e.preventDefault();

              $(brainDictionary.thalamus.brainGroup).each(function(index) {

                $(this).addClass(brainDictionary.activeElementClick);

                $(brainDictionary.brainSection).not(brainDictionary.thalamus.brainGroup).addClass(brainDictionary.dimElementClick);

              });

              $(brainDictionary.modalId).modal(
              {
                backdrop: 'static',
                keyboard: false
              });

              $(brainDictionary.modalId).addClass(brainDictionary.thalamus.brainModalClass);

              // Call Brain Dictionary

              // Title
              $(brainDictionary.modalTitle).html(brainDictionary.thalamus.brainLabel);

              // Description
              $(brainDictionary.modalBody).html(brainDictionary.thalamus.brainContent);

              $(brainDictionary.modalClose).on('click', function(e) {

                  $(brainDictionary.modalId).removeClass(brainDictionary.thalamus.brainModalClass);

                  $(brainDictionary.thalamus.brainGroup).each(function(index) {

                    $(this).removeClass(brainDictionary.activeElementClick);
                    $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                  });
              });
            }
          });

          // Amygdala
          $(brainDictionary.amygdala.brainGroup).on({

              mouseenter: function(e) {

                $(brainDictionary.amygdala.brainGroup).each(function(index) {

                  $(this).addClass(brainDictionary.activeElementHover);

                  $(brainDictionary.brainSection).not(brainDictionary.amygdala.brainGroup).addClass(brainDictionary.dimElementHover);

                });

              },
              mouseleave: function(e){

                $(brainDictionary.amygdala.brainGroup).each(function(index) {

                  $(this).removeClass(brainDictionary.activeElementHover);

                  $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

                });

              },
              click: function(e) {

                e.preventDefault();

                $(brainDictionary.amygdala.brainGroup).each(function(index) {

                  $(this).addClass(brainDictionary.activeElementClick);

                  $(brainDictionary.brainSection).not(brainDictionary.amygdala.brainGroup).addClass(brainDictionary.dimElementClick);

                });

                $(brainDictionary.modalId).modal(
                {
                  backdrop: 'static',
                  keyboard: false
                });

                $(brainDictionary.modalId).addClass(brainDictionary.amygdala.brainModalClass);

                // Call Brain Dictionary

                // Title
                $(brainDictionary.modalTitle).html(brainDictionary.amygdala.brainLabel);

                // Description
                $(brainDictionary.modalBody).html(brainDictionary.amygdala.brainContent);

                $(brainDictionary.modalClose).on('click', function(e) {

                    $(brainDictionary.modalId).removeClass(brainDictionary.amygdala.brainModalClass);

                    $(brainDictionary.amygdala.brainGroup).each(function(index) {

                      $(this).removeClass(brainDictionary.activeElementClick);
                      $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                    });
                });
              }
            });

            // Hippocampus
            $(brainDictionary.hippocampus.brainGroup).on({

                mouseenter: function(e) {

                  $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                    $(this).addClass(brainDictionary.activeElementHover);

                    $(brainDictionary.brainSection).not(brainDictionary.hippocampus.brainGroup).addClass(brainDictionary.dimElementHover);

                  });

                },
                mouseleave: function(e){

                  $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                    $(this).removeClass(brainDictionary.activeElementHover);

                    $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

                  });

                },
                click: function(e) {

                  e.preventDefault();

                  $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                    $(this).addClass(brainDictionary.activeElementClick);

                    $(brainDictionary.brainSection).not(brainDictionary.hippocampus.brainGroup).addClass(brainDictionary.dimElementClick);

                  });

                  $(brainDictionary.modalId).modal(
                  {
                    backdrop: 'static',
                    keyboard: false
                  });

                  $(brainDictionary.modalId).addClass(brainDictionary.hippocampus.brainModalClass);

                  // Call Brain Dictionary

                  // Title
                  $(brainDictionary.modalTitle).html(brainDictionary.hippocampus.brainLabel);

                  // Description
                  $(brainDictionary.modalBody).html(brainDictionary.hippocampus.brainContent);

                  $(brainDictionary.modalClose).on('click', function(e) {

                      $(brainDictionary.modalId).removeClass(brainDictionary.hippocampus.brainModalClass);

                      $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                        $(this).removeClass(brainDictionary.activeElementClick);
                        $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                      });
                  });
                }
              });

              // Cerebellum
              $(brainDictionary.cerebellum.brainGroup).on({

                  mouseenter: function(e) {

                    $(brainDictionary.cerebellum.brainGroup).each(function(index) {

                      $(this).addClass(brainDictionary.activeElementHover);

                      $(brainDictionary.brainSection).not(brainDictionary.cerebellum.brainGroup).addClass(brainDictionary.dimElementHover);

                    });

                  },
                  mouseleave: function(e){

                    $(brainDictionary.cerebellum.brainGroup).each(function(index) {

                      $(this).removeClass(brainDictionary.activeElementHover);

                      $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

                    });

                  },
                  click: function(e) {

                    e.preventDefault();

                    $(brainDictionary.cerebellum.brainGroup).each(function(index) {

                      $(this).addClass(brainDictionary.activeElementClick);

                      $(brainDictionary.brainSection).not(brainDictionary.cerebellum.brainGroup).addClass(brainDictionary.dimElementClick);

                    });

                    $(brainDictionary.modalId).modal(
                    {
                      backdrop: 'static',
                      keyboard: false
                    });

                    $(brainDictionary.modalId).addClass(brainDictionary.cerebellum.brainModalClass);

                    // Call Brain Dictionary

                    // Title
                    $(brainDictionary.modalTitle).html(brainDictionary.cerebellum.brainLabel);

                    // Description
                    $(brainDictionary.modalBody).html(brainDictionary.cerebellum.brainContent);

                    $(brainDictionary.modalClose).on('click', function(e) {

                        $(brainDictionary.modalId).removeClass(brainDictionary.cerebellum.brainModalClass);

                        $(brainDictionary.cerebellum.brainGroup).each(function(index) {

                          $(this).removeClass(brainDictionary.activeElementClick);
                          $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                        });
                    });
                  }
                });

                // Hippocampus
                $(brainDictionary.hippocampus.brainGroup).on({

                    mouseenter: function(e) {

                      $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                        $(this).addClass(brainDictionary.activeElementHover);

                        $(brainDictionary.brainSection).not(brainDictionary.hippocampus.brainGroup).addClass(brainDictionary.dimElementHover);

                      });

                    },
                    mouseleave: function(e){

                      $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                        $(this).removeClass(brainDictionary.activeElementHover);

                        $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

                      });

                    },
                    click: function(e) {

                      e.preventDefault();

                      $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                        $(this).addClass(brainDictionary.activeElementClick);

                        $(brainDictionary.brainSection).not(brainDictionary.hippocampus.brainGroup).addClass(brainDictionary.dimElementClick);

                      });

                      $(brainDictionary.modalId).modal(
                      {
                        backdrop: 'static',
                        keyboard: false
                      });

                      $(brainDictionary.modalId).addClass(brainDictionary.hippocampus.brainModalClass);

                      // Call Brain Dictionary

                      // Title
                      $(brainDictionary.modalTitle).html(brainDictionary.hippocampus.brainLabel);

                      // Description
                      $(brainDictionary.modalBody).html(brainDictionary.hippocampus.brainContent);

                      $(brainDictionary.modalClose).on('click', function(e) {

                          $(brainDictionary.modalId).removeClass(brainDictionary.hippocampus.brainModalClass);

                          $(brainDictionary.hippocampus.brainGroup).each(function(index) {

                            $(this).removeClass(brainDictionary.activeElementClick);
                            $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                          });
                      });
                    }
                  });

            // Temporal Lobe
            $(brainDictionary.temporalLobe.brainGroup).on({

                mouseenter: function(e) {

                  $(brainDictionary.temporalLobe.brainGroup).each(function(index) {

                    $(this).addClass(brainDictionary.activeElementHover);

                    $(brainDictionary.brainSection).not(brainDictionary.temporalLobe.brainGroup).addClass(brainDictionary.dimElementHover);

                  });

                },
                mouseleave: function(e){

                  $(brainDictionary.temporalLobe.brainGroup).each(function(index) {

                    $(this).removeClass(brainDictionary.activeElementHover);

                    $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementHover);

                  });

                },
                click: function(e) {

                  e.preventDefault();

                  $(brainDictionary.temporalLobe.brainGroup).each(function(index) {

                    $(this).addClass(brainDictionary.activeElementClick);

                    $(brainDictionary.brainSection).not(brainDictionary.temporalLobe.brainGroup).addClass(brainDictionary.dimElementClick);

                  });

                  $(brainDictionary.modalId).modal(
                  {
                    backdrop: 'static',
                    keyboard: false
                  });

                  $(brainDictionary.modalId).addClass(brainDictionary.temporalLobe.brainModalClass);

                  // Call Brain Dictionary

                  // Title
                  $(brainDictionary.modalTitle).html(brainDictionary.temporalLobe.brainLabel);

                  // Description
                  $(brainDictionary.modalBody).html(brainDictionary.temporalLobe.brainContent);

                  $(brainDictionary.modalClose).on('click', function(e) {

                      $(brainDictionary.modalId).removeClass(brainDictionary.temporalLobe.brainModalClass);

                      $(brainDictionary.temporalLobe.brainGroup).each(function(index) {

                        $(this).removeClass(brainDictionary.activeElementClick);
                        $(brainDictionary.brainSection).removeClass(brainDictionary.dimElementClick);

                      });
                  });
                }
              });


  });
})(jQuery);
