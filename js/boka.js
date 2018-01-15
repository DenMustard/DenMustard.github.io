$(document).ready(function(){
  $('.click-popup-call-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
    $('.blur-not').toggleClass('blur-filter');
  });
});

$(document).ready(function(){
  $('.close-contact').on('click', function(){
    $('.popup-call-contact').toggleClass('popup-call-contact-show');
    $(".blur-not").toggleClass("blur-filter");
  });
  
});

$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                        message:'Vänligen fyll i ditt förnamn'
                    },
                        notEmpty: {
                        message: 'Vänligen fyll i ditt förnamn'
                    }
                }
            },
             efternamn: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Vänligen fyll i ditt efternamn'
                    },
                    notEmpty: {
                        message: 'Vänligen fyll i ditt efternamn'
                    }
                }
            },
             organisation: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Vänligen fyll i vilken organisation du representerar'
                    },
                    notEmpty: {
                        message: 'Vänligen fyll i vilken organisation du representerar'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Vänligen fyll i din e-postadress'
                    },
                    emailAddress: {
                        message: 'Vänligen fyll i en giltig e-postadress'
                    }
                }
            },
             phone: {
                validators: {
                     stringLength: {
                        min: 9,
                        max: 10,
                        message:'Vänligen fyll i ett giltigt telefonnummer (012 234 567 89)'
                    },
                    notEmpty: {
                        message: 'Vänligen fyll i ditt telefonnummer'
                    }
                }
            },
            lokaladress: {
                validators: {
                     stringLength: {
                        min: 2,
                        max: 100,
                        message: 'Vänligen fyll i en giltig adress'
                    },
                }
            },
            datum: {
                validators: {
                     stringLength: {
                        min: 8,
                        max: 10,
                        message: 'Vänligen fyll i ett giltigt datum'
                    },
                }
            },
            kurs: {
                validators: {
                    notEmpty: {
                        message: 'Vänligen välj den kurs du är intresserad av'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            kommentar: {
                validators: {
                      stringLength: {
                        min: 1,
                        max: 200,
                        message:'Vänligen skriv inte fler än 200 tecken'
                    },
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});



function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

